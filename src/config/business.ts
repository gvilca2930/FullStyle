import type { Business } from '../types/business';

/** Configuración central. Completa dirección, mapas y redes cuando estén confirmados. */
export const business: Business = {
  name: 'FULLSTYLE',
  slogan: 'Tu mejor versión empieza aquí.',
  description:
    'Barbería profesional en Arequipa especializada en cortes, degradados y estilos personalizados.',
  locality: 'Arequipa',
  region: 'Arequipa',
  countryCode: 'PE',
  phone: '+51 971 014 323',
  whatsapp: '51971014323',
  email: 'george.vilca@gmail.com',
  address: 'Arequipa, Perú',
  mapsUrl: null,
  mapsEmbedUrl: null,
  openingHours: [
    { id: 'weekday', days: 'Lunes - Sábado', hours: '10:00 AM - 8:00 PM', order: 1 },
    { id: 'sunday', days: 'Domingo', hours: 'Cerrado', closed: true, order: 2 },
  ],
  socialNetworks: [
    { id: 'instagram', label: 'Instagram', url: null },
    { id: 'facebook', label: 'Facebook', url: null },
    { id: 'tiktok', label: 'TikTok', url: null },
  ],
  logo: '/images/logo.webp',
  heroImage: '/images/hero/fullstyle-hero.webp',
  aboutImage: '/images/about/barbero-fullstyle-arequipa.webp',
};
