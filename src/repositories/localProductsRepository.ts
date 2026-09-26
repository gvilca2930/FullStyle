import { productsData } from '../data/products';
import type { ProductsRepository } from './types';

export const localProductsRepository: ProductsRepository = {
  async getActive() {
    return productsData.filter(({ active }) => active).toSorted((a, b) => a.order - b.order);
  },
};
