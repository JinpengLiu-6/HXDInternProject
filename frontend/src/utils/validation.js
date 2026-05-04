import { getTranslations } from './translations'

function isEmpty(value) {
  return value === undefined || value === null || String(value).trim() === ''
}

export function validateSimulationInputs(values, locale = 'fr') {
  const t = getTranslations(locale)
  const errors = {}
  const fixedCosts = Number(values.fixedCosts)
  const variableCost = Number(values.variableCost)
  const sellingPrice = Number(values.sellingPrice)

  if (isEmpty(values.fixedCosts) || fixedCosts < 0) {
    errors.fixedCosts = t.validation.simulation.fixedCosts
  }

  if (isEmpty(values.variableCost) || variableCost < 0) {
    errors.variableCost = t.validation.simulation.variableCost
  }

  if (isEmpty(values.sellingPrice) || sellingPrice <= 0) {
    errors.sellingPrice = t.validation.simulation.sellingPrice
  } else if (sellingPrice <= variableCost) {
    errors.sellingPrice = t.validation.simulation.sellingPriceHigher
  }

  return errors
}

export function validateLeadInputs(values, locale = 'fr') {
  const t = getTranslations(locale)
  const errors = {}

  if (isEmpty(values.name)) {
    errors.name = t.validation.lead.name
  }

  if (isEmpty(values.email)) {
    errors.email = t.validation.lead.emailRequired
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = t.validation.lead.emailInvalid
  }

  if (isEmpty(values.projectDescription)) {
    errors.projectDescription = t.validation.lead.projectDescription
  }

  return errors
}
