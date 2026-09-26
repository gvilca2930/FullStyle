import type { GalleryItem } from '../types/gallery';
import type { Product } from '../types/product';
import type { Service } from '../types/service';

export interface ServicesRepository { getActive(): Promise<Service[]>; }
export interface ProductsRepository { getActive(): Promise<Product[]>; }
export interface GalleryRepository { getVisible(): Promise<GalleryItem[]>; }
