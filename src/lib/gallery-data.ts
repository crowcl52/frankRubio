export type GalleryItem = {
  id: string;
  alt: string;
  category: 'retratos' | 'bodas' | 'editorial' | 'paisaje' | 'otros';
  baseName: string; // filename without extension in /public/gallery/derived
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [
  // Placeholder items referencing expected derived filenames
  { id: '1', alt: 'Retrato en sombra', category: 'retratos', baseName: 'photo-01', width: 1920, height: 1280 },
  { id: '2', alt: 'Boda en blanco y negro', category: 'bodas', baseName: 'photo-02', width: 1920, height: 1280 },
  { id: '3', alt: 'Retrato urbano', category: 'editorial', baseName: 'photo-03', width: 1440, height: 960 },
  { id: '4', alt: 'Paisaje minimalista', category: 'paisaje', baseName: 'photo-04', width: 1440, height: 960 },
  { id: '5', alt: 'Detalle arquitectónico', category: 'editorial', baseName: 'photo-05', width: 1440, height: 960 },
  { id: '6', alt: 'Luces y sombras', category: 'otros', baseName: 'photo-06', width: 1024, height: 683 },
];
