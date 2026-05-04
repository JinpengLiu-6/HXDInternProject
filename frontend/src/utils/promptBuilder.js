import { getTranslations } from './translations'

export function buildResearchPrompt({
  companyType,
  companyStage,
  market,
  questionGoal,
  userQuestion,
  constraints,
  locale = 'fr',
}) {
  const t = getTranslations(locale)
  const goal = t.promptGoalLabels[questionGoal] ?? t.promptGoalLabels.default

  return t.promptTemplate
    .replaceAll('{{goal}}', goal)
    .replaceAll('{{companyType}}', companyType || '')
    .replaceAll('{{companyStage}}', companyStage || '')
    .replaceAll('{{market}}', market || '')
    .replaceAll('{{userQuestion}}', userQuestion || '')
    .replaceAll('{{constraints}}', constraints || t.noConstraint)
}

export function validatePromptInputs(values, locale = 'fr') {
  const t = getTranslations(locale)
  const errors = {}

  if (!values.companyType.trim()) {
    errors.companyType = t.validation.prompt.companyType
  }

  if (!values.companyStage.trim()) {
    errors.companyStage = t.validation.prompt.companyStage
  }

  if (!values.market.trim()) {
    errors.market = t.validation.prompt.market
  }

  if (!values.userQuestion.trim()) {
    errors.userQuestion = t.validation.prompt.userQuestion
  }

  return errors
}
