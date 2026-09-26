import { galleryData } from '../data/gallery';
import type { GalleryRepository } from './types';

export const localGalleryRepository: GalleryRepository = {
  async getVisible() {
    return galleryData.filter(({ visible }) => visible).toSorted((a, b) => a.order - b.order);
  },
};
