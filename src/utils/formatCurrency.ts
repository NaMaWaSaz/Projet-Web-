export function formatCurrency(amount: number): string {
  return `${amount.toLocaleString('fr-TN', {
    style: 'currency',
    currency: 'TND',
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })}`;
}