import { productsData } from '../data/products';
import type { ProductsRepository } from './types';

export const localProductsRepository: ProductsRepository = {
  async getActive() {
    return productsData
      .filter(({ active }) => active !== false)
      .toSorted((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
  },
};
