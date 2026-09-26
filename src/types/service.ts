export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number | null;
  priceLabel: string;
  currency: 'PEN';
  duration?: string | null;
  active: boolean;
  featured: boolean;
  order: number;
  image?: string | null;
  imageFallback?: string | null;
  imageAlt: string;
  imagePosition?: string;
  createdAt?: string;
  updatedAt?: string;
}
