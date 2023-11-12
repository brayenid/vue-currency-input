export const addCurrency = (number, currency) => {
  const processed = number
    .split('.')
    .join('')
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  if (currency) {
    return `${currency}. ${processed}`
  }
  return processed
}

export const removeCurrency = (number) => {
  return parseFloat(number.toString().replace(/\./g, ''))
}

export const sanitizeNonNumber = (value) => {
  return value.replace(/[^0-9.]/g, '')
}
