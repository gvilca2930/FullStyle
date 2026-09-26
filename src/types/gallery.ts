export type GalleryCategory = 'Fade' | 'Clásico' | 'Moderno' | 'Barba' | 'Otros';

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: GalleryCategory;
  image: string | null;
  alt: string;
  visible: boolean;
  order: number;
}
