const SIMULATION_KEY = 'startup-profit-simulation'
const LEAD_KEY = 'startup-profit-lead'
const PROMPT_KEY = 'startup-prompt-builder'
const LOCALE_KEY = 'startup-locale'

const defaultSimulationDraft = {
  fixedCosts: '',
  variableCost: '',
  sellingPrice: '',
}

const defaultLeadDraft = {
  name: '',
  email: '',
  phone: '',
  projectDescription: '',
}

const defaultPromptDraft = {
  companyType: '',
  companyStage: '',
  market: '',
  questionGoal: 'market-analysis',
  userQuestion: '',
  constraints: '',
}

function readStorage(key, fallback) {
  try {
    const rawValue = window.localStorage.getItem(key)
    return rawValue ? JSON.parse(rawValue) : fallback
  } catch {
    return fallback
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    return null
  }

  return value
}

export function loadSimulationDraft() {
  return readStorage(SIMULATION_KEY, defaultSimulationDraft)
}

export function saveSimulationDraft(value) {
  return writeStorage(SIMULATION_KEY, value)
}

export function loadLeadDraft() {
  return readStorage(LEAD_KEY, defaultLeadDraft)
}

export function saveLeadDraft(value) {
  return writeStorage(LEAD_KEY, value)
}

export function loadPromptDraft() {
  return readStorage(PROMPT_KEY, defaultPromptDraft)
}

export function savePromptDraft(value) {
  return writeStorage(PROMPT_KEY, value)
}

export function loadLocale() {
  return readStorage(LOCALE_KEY, 'fr')
}

export function saveLocale(value) {
  return writeStorage(LOCALE_KEY, value)
}
