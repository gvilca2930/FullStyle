import type { Product } from '../types/product';

/** Catálogo visual. Los precios se muestran cuando el negocio los confirme. */
export const productsData: Product[] = [
  {
    id: 'prd_001', slug: 'pasta-modeladora-l3vel3', name: 'Pasta modeladora L3VEL3',
    description: 'Fijación y textura para definir el peinado con un acabado profesional.',
    price: null, currency: 'PEN', available: true, active: true, featured: true, order: 1, image: '/images/products/pasta-modeladora-l3vel3.webp',
  },
  {
    id: 'prd_002', slug: 'polvo-voluminizador-immortal', name: 'Polvo voluminizador Immortal',
    description: 'Polvo texturizador para aportar volumen, cuerpo y control al cabello.',
    price: null, currency: 'PEN', available: true, active: true, featured: false, order: 2, image: '/images/products/polvo-voluminizador-immortal.webp',
  },
  {
    id: 'prd_003', slug: 'colonia-barber-marmara', name: 'Colonia Barber Marmara',
    description: 'Colonia para completar el servicio con una sensación fresca y limpia.',
    price: null, currency: 'PEN', available: true, active: true, featured: false, order: 3, image: '/images/products/colonia-barber-marmara.webp',
  },
  {
    id: 'prd_004', slug: 'mascarilla-colageno-ojeras', name: 'Mascarilla de colágeno',
    description: 'Cuidado facial complementario con aloe vera y ácido hialurónico.',
    price: null, currency: 'PEN', available: true, active: true, featured: false, order: 4, image: '/images/products/mascarilla-colageno-ojeras.webp',
  },
];
