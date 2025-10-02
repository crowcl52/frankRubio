#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.dirname(__dirname)

async function setupImages() {
  console.log('Setting up images...')
  
  const srcDir = path.join(projectRoot, 'src/assets/img')
  const publicDir = path.join(projectRoot, 'public')
  
  try {
    // Read all files from src/assets/img
    const files = await fs.readdir(srcDir)
    const galleryFiles = files.filter(file => file.startsWith('gallery_') && file.endsWith('.jpeg'))
    
    console.log(`Found ${galleryFiles.length} gallery images`)
    
    // Copy images to public/gallery/originals
    const originalsDir = path.join(publicDir, 'gallery/originals')
    await fs.mkdir(originalsDir, { recursive: true })
    
    for (const file of galleryFiles) {
      const srcPath = path.join(srcDir, file)
      const destPath = path.join(originalsDir, file)
      await fs.copyFile(srcPath, destPath)
      console.log(`Copied ${file} to originals`)
    }
    
    // Create a simple hero image by copying the first gallery image
    if (galleryFiles.length > 0) {
      const heroSrc = path.join(srcDir, galleryFiles[0])
      const heroDest = path.join(originalsDir, 'hero.jpg')
      await fs.copyFile(heroSrc, heroDest)
      console.log('Created hero.jpg from first gallery image')
    }
    
    // Copy photographer images
    const profileFiles = files.filter(file => file.startsWith('profile') && file.endsWith('.jpeg'))
    const photographerDir = path.join(publicDir, 'photographer')
    await fs.mkdir(photographerDir, { recursive: true })
    
    if (profileFiles.length >= 2) {
      await fs.copyFile(path.join(srcDir, profileFiles[0]), path.join(photographerDir, 'photoA.jpg'))
      await fs.copyFile(path.join(srcDir, profileFiles[1]), path.join(photographerDir, 'photoB.jpg'))
      console.log('Copied photographer photos')
    }
    
    // Create placeholder LQIP files for all images
    const lqipDir = path.join(publicDir, 'gallery/derived/lqip')
    await fs.mkdir(lqipDir, { recursive: true })
    
    const lqipData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
    
    // Create LQIP for hero
    await fs.writeFile(path.join(lqipDir, 'hero.txt'), lqipData)
    
    // Create LQIP for all gallery images
    for (const file of galleryFiles) {
      const baseName = path.parse(file).name
      await fs.writeFile(path.join(lqipDir, `${baseName}.txt`), lqipData)
    }
    
    console.log('Created LQIP placeholder files')
    
    // Create placeholder images for different sizes (we'll use the original for now)
    const sizes = [480, 768, 1024, 1440, 1920]
    
    for (const size of sizes) {
      const sizeDir = path.join(publicDir, `gallery/derived/${size}`)
      await fs.mkdir(sizeDir, { recursive: true })
      
      // Copy hero image
      if (galleryFiles.length > 0) {
        const heroSrc = path.join(srcDir, galleryFiles[0])
        const heroDest = path.join(sizeDir, 'hero.jpg')
        await fs.copyFile(heroSrc, heroDest)
      }
      
      // Copy gallery images
      for (const file of galleryFiles) {
        const srcPath = path.join(srcDir, file)
        const baseName = path.parse(file).name
        const destPath = path.join(sizeDir, `${baseName}.jpg`)
        await fs.copyFile(srcPath, destPath)
      }
      
      console.log(`Created ${size}px variants`)
    }
    
    console.log('✅ Image setup complete!')
    console.log(`📸 Processed ${galleryFiles.length} gallery images`)
    console.log(`👤 Processed ${profileFiles.length} profile images`)
    
  } catch (error) {
    console.error('Error setting up images:', error)
    process.exit(1)
  }
}

setupImages()
