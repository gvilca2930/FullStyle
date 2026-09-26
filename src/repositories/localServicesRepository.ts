import { servicesData } from '../data/services';
import type { ServicesRepository } from './types';

export const localServicesRepository: ServicesRepository = {
  async getActive() {
    return servicesData.filter(({ active }) => active).toSorted((a, b) => a.order - b.order);
  },
};
