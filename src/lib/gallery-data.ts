export type GalleryItem = {
  id: string;
  alt: string;
  category: 'retratos' | 'bodas' | 'editorial' | 'paisaje' | 'otros';
  baseName: string; // filename without extension in /public/gallery/derived
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [
  { id: '1', alt: 'Fotografía en blanco y negro', category: 'retratos', baseName: 'gallery_1', width: 800, height: 1200 },
  { id: '2', alt: 'Composición artística', category: 'editorial', baseName: 'gallery_2', width: 1200, height: 800 },
  { id: '3', alt: 'Retrato expresivo', category: 'retratos', baseName: 'gallery_3', width: 900, height: 1350 },
  { id: '4', alt: 'Momento capturado', category: 'bodas', baseName: 'gallery_4', width: 1100, height: 733 },
  { id: '5', alt: 'Detalle íntimo', category: 'retratos', baseName: 'gallery_5', width: 800, height: 1000 },
  { id: '6', alt: 'Luz y sombra', category: 'editorial', baseName: 'gallery_6', width: 1000, height: 1500 },
  { id: '7', alt: 'Elegancia natural', category: 'retratos', baseName: 'gallery_7', width: 1200, height: 900 },
  { id: '8', alt: 'Composición urbana', category: 'paisaje', baseName: 'gallery_8', width: 1400, height: 700 },
  { id: '9', alt: 'Expresión auténtica', category: 'retratos', baseName: 'gallery_9', width: 750, height: 1125 },
  { id: '10', alt: 'Momento especial', category: 'bodas', baseName: 'gallery_10', width: 1300, height: 867 },
  { id: '11', alt: 'Arte visual', category: 'editorial', baseName: 'gallery_11', width: 900, height: 1200 },
  { id: '12', alt: 'Belleza simple', category: 'otros', baseName: 'gallery_12', width: 1000, height: 667 },
  { id: '13', alt: 'Contraste perfecto', category: 'editorial', baseName: 'gallery_13', width: 850, height: 1275 },
  { id: '14', alt: 'Emoción capturada', category: 'retratos', baseName: 'gallery_14', width: 1150, height: 767 },
  { id: '15', alt: 'Celebración única', category: 'bodas', baseName: 'gallery_15', width: 800, height: 1100 },
  { id: '16', alt: 'Perspectiva artística', category: 'paisaje', baseName: 'gallery_16', width: 1500, height: 750 },
  { id: '17', alt: 'Instante precioso', category: 'otros', baseName: 'gallery_17', width: 950, height: 1425 },
  { id: '18', alt: 'Composición elegante', category: 'editorial', baseName: 'gallery_18', width: 1100, height: 733 },
  { id: '19', alt: 'Retrato íntimo', category: 'retratos', baseName: 'gallery_19', width: 800, height: 1200 },
  { id: '20', alt: 'Momento eterno', category: 'bodas', baseName: 'gallery_20', width: 1250, height: 833 },
  { id: '21', alt: 'Nueva composición artística', category: 'editorial', baseName: 'gallery_21', width: 1000, height: 1400 },
  { id: '22', alt: 'Retrato contemporáneo', category: 'retratos', baseName: 'gallery_22', width: 900, height: 1350 },
];
