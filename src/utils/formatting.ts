export function formatPrice(amount: number, currency: 'PEN' = 'PEN'): string {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 2,
  }).format(amount);
}

export function createTelUrl(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}
