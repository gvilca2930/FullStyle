import type { Service } from '../types/service';

/** Los precios se mantienen ocultos hasta que el negocio confirme su tarifario. */
export const servicesData: Service[] = [
  {
    id: 'srv_001', slug: 'corte-clasico', name: 'Corte clásico',
    description: 'Un acabado limpio y equilibrado, adaptado a la forma de tu rostro.',
    price: null, currency: 'PEN', active: true, featured: false, order: 1, image: '/images/services/corte-clasico.webp',
  },
  {
    id: 'srv_002', slug: 'fade-texturizado', name: 'Fade texturizado',
    description: 'Transiciones precisas y textura superior para un estilo actual.',
    price: null, currency: 'PEN', active: true, featured: true, order: 2, image: '/images/services/fade-texturizado.webp',
  },
  {
    id: 'srv_003', slug: 'corte-moderno-diseno', name: 'Corte moderno con diseño',
    description: 'Diseño lateral personalizado y acabado definido para un look único.',
    price: null, currency: 'PEN', active: true, featured: true, order: 3, image: '/images/services/corte-moderno-con-diseno.webp',
  },
  {
    id: 'srv_004', slug: 'degradado-diseno', name: 'Degradado con diseño',
    description: 'Degradado limpio con líneas personalizadas y contornos precisos.',
    price: null, currency: 'PEN', active: true, featured: false, order: 4, image: '/images/services/degradado-con-diseno.webp',
  },
];
