import Navigation from './Navigation'
import { ROUTES } from '../services/routerService'
import { LOCALES, getTranslations } from '../utils/translations'
import headerLogo from '../../logo.png'

function AppLayout({
  children,
  currentRoute,
  currentRouteLabel,
  locale,
  onLocaleChange,
  onNavigate,
}) {
  const t = getTranslations(locale)

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="topbar-brand-column">
            <button
              type="button"
              className="brand-wrap brand-wrap-button"
              onClick={() => onNavigate(ROUTES.LANDING)}
            >
              <img className="brand-logo" src={headerLogo} alt="Logo HXD Expertise" />
            </button>
          </div>

          <div className="topbar-nav-column">
            <Navigation currentRoute={currentRoute} locale={locale} onNavigate={onNavigate} />
          </div>

          <div className="topbar-locale-column">
            <div className="locale-switch" aria-label={t.localeLabel}>
              <button
                type="button"
                className={`locale-pill${locale === LOCALES.FR ? ' locale-pill-active' : ''}`}
                onClick={() => onLocaleChange(LOCALES.FR)}
              >
                FR
              </button>
              <button
                type="button"
                className={`locale-pill${locale === LOCALES.CN ? ' locale-pill-active' : ''}`}
                onClick={() => onLocaleChange(LOCALES.CN)}
              >
                CN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-panel">
        <div className="page-intro">
          <span className="page-badge">{currentRouteLabel}</span>
          <p className="page-subtitle">{t.pageSubtitle}</p>
        </div>
        {children}
      </main>
    </div>
  )
}

export default AppLayout
