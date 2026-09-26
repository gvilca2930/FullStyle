export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number | null;
  currency: 'PEN';
  active: boolean;
  featured: boolean;
  order: number;
  image?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
