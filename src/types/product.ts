export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number | null;
  currency: 'PEN';
  available: boolean;
  active: boolean;
  featured: boolean;
  order: number;
  image?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
