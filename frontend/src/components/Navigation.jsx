import { ROUTES } from '../services/routerService'
import { getTranslations } from '../utils/translations'

function Navigation({ currentRoute, locale, onNavigate }) {
  const t = getTranslations(locale)
  const navItems = [
    { label: t.nav.landing, route: ROUTES.LANDING },
    { label: t.nav.simulator, route: ROUTES.SIMULATOR },
    { label: t.nav.promptBuilder, route: ROUTES.PROMPT_BUILDER },
    { label: t.nav.result, route: ROUTES.RESULT },
    { label: t.nav.leadForm, route: ROUTES.LEAD_FORM },
  ]

  return (
    <nav className="nav-links" aria-label={locale === 'cn' ? '主导航' : 'Navigation principale'}>
      {navItems.map((item) => (
        <button
          key={item.route}
          type="button"
          className={`nav-link${currentRoute === item.route ? ' nav-link-active' : ''}`}
          onClick={() => onNavigate(item.route)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
