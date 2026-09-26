import type { GalleryItem } from '../types/gallery';

export const galleryData: GalleryItem[] = [
  { id: 'gal_001', title: 'Fade texturizado', description: 'Degradado limpio con textura superior', category: 'Fade', image: '/images/gallery/trabajo-fade-texturizado.webp', alt: 'Corte fade texturizado realizado en la barbería FULLSTYLE de Arequipa', visible: true, order: 1 },
  { id: 'gal_002', title: 'Degradado con diseño', description: 'Acabado con líneas personalizadas', category: 'Moderno', image: '/images/gallery/trabajo-degradado-con-diseno.webp', alt: 'Corte degradado con diseño realizado por FULLSTYLE en Arequipa', visible: true, order: 2 },
  { id: 'gal_003', title: 'Corte clásico', description: 'Acabado elegante y definido', category: 'Clásico', image: '/images/gallery/trabajo-corte-clasico.webp', alt: 'Corte clásico masculino con degradado realizado en FULLSTYLE', visible: true, order: 3 },
  { id: 'gal_004', title: 'Diseño moderno', description: 'Textura y diseño lateral a medida', category: 'Moderno', image: '/images/gallery/trabajo-corte-moderno-con-diseno.webp', alt: 'Corte moderno con diseño lateral realizado en FULLSTYLE Arequipa', visible: true, order: 4 },
];
