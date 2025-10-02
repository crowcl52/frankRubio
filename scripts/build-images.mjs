import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(process.cwd(), 'public/gallery')
const SRC_DIR = path.join(ROOT, 'originals')
const OUT_DIR = path.join(ROOT, 'derived')
const LQIP_DIR = path.join(OUT_DIR, 'lqip')
const WIDTHS = [480, 768, 1024, 1440, 1920]

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true })
}

async function buildOne(inputPath) {
  const base = path.basename(inputPath).replace(/\.(jpe?g|png|tif|tiff)$/i, '')
  const img = sharp(inputPath).withMetadata()
  const { width, height } = await img.metadata()

  // LQIP
  const lqipBuffer = await img
    .clone()
    .resize({ width: 24 })
    .jpeg({ quality: 40 })
    .toBuffer()
  const lqipData = `data:image/jpeg;base64,${lqipBuffer.toString('base64')}`
  await fs.promises.writeFile(path.join(LQIP_DIR, `${base}.txt`), lqipData, 'utf8')

  for (const w of WIDTHS) {
    const dir = path.join(OUT_DIR, String(w))
    await ensureDir(dir)
    const resize = img.clone().resize({ width: Math.min(w, width || w) })

    await Promise.all([
      resize.clone().avif({ quality: 55 }).toFile(path.join(dir, `${base}.avif`)),
      resize.clone().webp({ quality: 65 }).toFile(path.join(dir, `${base}.webp`)),
      resize.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(dir, `${base}.jpg`)),
    ])
  }
}

async function main() {
  await ensureDir(OUT_DIR)
  await ensureDir(LQIP_DIR)
  const files = (await fs.promises.readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png|tif|tiff)$/i.test(f))
  if (files.length === 0) {
    console.log('No hay imágenes en', SRC_DIR)
    return
  }
  for (const f of files) {
    const input = path.join(SRC_DIR, f)
    console.log('Procesando', f)
    await buildOne(input)
  }
  console.log('Listo.')
}

main().catch((e) => { console.error(e); process.exit(1) })
