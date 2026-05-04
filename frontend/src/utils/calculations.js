export function calculateBreakEvenPoint({ fixedCosts, variableCost, sellingPrice }) {
  const contributionMargin = sellingPrice - variableCost

  if (contributionMargin <= 0) {
    return 0
  }

  return fixedCosts / contributionMargin
}
