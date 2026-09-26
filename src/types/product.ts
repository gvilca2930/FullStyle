export type ProductCategory = 'styling' | 'cuidado' | 'barba' | 'fragancias';

export interface Product {
  id: string;
  slug?: string;
  name: string;
  description: string;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  priceLabel: string;
  available: boolean;
  active?: boolean;
  featured: boolean;
  category: ProductCategory;
  whatsappMessage?: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}
