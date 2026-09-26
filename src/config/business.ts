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
  phone: '+51 957 015 050',
  whatsapp: '51957015050',
  email: 'reservas@fullstyle.pe',
  address: 'Arequipa, Perú',
  mapsUrl: "https://maps.app.goo.gl/n9VFUpEcR6cDuxZ66",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d239.19403462134395!2d-71.49460135153247!3d-16.419515540062854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-16.419522293721656!2d-71.49461040398731!5e0!3m2!1ses!2spe!4v1790433453843!5m2!1ses!2spe",
  openingHours: [
    { id: 'weekday', days: 'Lunes - Sabados', hours: '10:00 AM - 8:00 PM', order: 1 },
    { id: 'sunday', days: 'Miercoles y Domingos', hours: 'Cerrado', closed: true, order: 2 },
  ],
  socialNetworks: [
    { id: 'instagram', label: 'Instagram', url: "https://www.tiktok.com/@fullstyle_barber?_r=1&_t=ZS-9A3bFjZ39DI" },
    { id: 'facebook', label: 'Facebook', url: "https://www.tiktok.com/@fullstyle_barber?_r=1&_t=ZS-9A3bFjZ39DI" },
    { id: 'tiktok', label: 'TikTok', url: "https://www.tiktok.com/@fullstyle_barber?_r=1&_t=ZS-9A3bFjZ39DI" },
  ],
  logo: '/images/logo.webp',
  heroImage: '/images/hero/fullstyle-hero.webp',
  aboutImage: '/images/about/barbero-fullstyle-arequipa.webp',
};
