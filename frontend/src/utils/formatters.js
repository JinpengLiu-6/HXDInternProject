export function formatBreakEvenValue(value, locale = 'fr-FR') {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
  }).format(value)
}
