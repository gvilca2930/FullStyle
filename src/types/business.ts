export interface OpeningHoursEntry {
  id: string;
  days: string;
  hours: string;
  closed?: boolean;
  order: number;
}

export type SocialNetworkKey = 'instagram' | 'facebook' | 'tiktok';

export interface SocialNetwork {
  id: SocialNetworkKey;
  label: string;
  url: string | null;
}

export interface Business {
  name: string;
  slogan: string;
  description: string;
  locality: string;
  region: string;
  countryCode: 'PE';
  phone: string;
  whatsapp: string;
  email: string;
  address: string | null;
  mapsUrl: string | null;
  mapsEmbedUrl: string | null;
  openingHours: OpeningHoursEntry[];
  socialNetworks: SocialNetwork[];
  logo: string | null;
  heroImage: string | null;
  aboutImage: string | null;
}
