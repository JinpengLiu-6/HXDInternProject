export const ROUTES = {
  LANDING: 'landing',
  SIMULATOR: 'simulator',
  RESULT: 'result',
  LEAD_FORM: 'lead-form',
  PROMPT_BUILDER: 'prompt-builder',
}

const routeLabels = {
  [ROUTES.LANDING]: 'Accueil',
  [ROUTES.SIMULATOR]: 'Simulation',
  [ROUTES.RESULT]: 'Resultat',
  [ROUTES.LEAD_FORM]: 'Contact',
  [ROUTES.PROMPT_BUILDER]: 'Generateur de prompt',
}

export function getCurrentRoute() {
  const route = window.location.hash.replace('#/', '')
  return Object.values(ROUTES).includes(route) ? route : ROUTES.LANDING
}

export function navigateTo(route) {
  window.location.hash = `/${route}`
}

export function subscribeToRouteChanges(callback) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

export function getRouteLabel(route, labels = routeLabels) {
  return labels[route] ?? labels[ROUTES.LANDING]
}
