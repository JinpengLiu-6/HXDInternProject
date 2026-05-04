import { useEffect, useRef, useState } from 'react'
import './App.css'
import AppLayout from './components/AppLayout'
import LandingPage from './pages/LandingPage'
import LeadFormPage from './pages/LeadFormPage'
import PromptBuilderPage from './pages/PromptBuilderPage'
import ResultPage from './pages/ResultPage'
import SimulatorPage from './pages/SimulatorPage'
import { getCurrentRoute, getRouteLabel, navigateTo, ROUTES, subscribeToRouteChanges } from './services/routerService'
import { loadLocale, saveLocale } from './services/storageService'
import { calculateBreakEvenPoint } from './utils/calculations'
import { getTranslations } from './utils/translations'

const EMPTY_SIMULATION = {
  fixedCosts: '',
  variableCost: '',
  sellingPrice: '',
}

const EMPTY_LEAD = {
  name: '',
  email: '',
  phone: '',
  projectDescription: '',
}

const EMPTY_PROMPT = {
  companyType: '',
  companyStage: '',
  market: '',
  questionGoal: 'market-analysis',
  userQuestion: '',
  constraints: '',
}

function App() {
  const [route, setRoute] = useState(getCurrentRoute())
  const [simulationData, setSimulationData] = useState(EMPTY_SIMULATION)
  const [result, setResult] = useState(null)
  const [leadData, setLeadData] = useState(EMPTY_LEAD)
  const [promptData, setPromptData] = useState(EMPTY_PROMPT)
  const [locale, setLocale] = useState(loadLocale())
  const t = getTranslations(locale)
  const routeRef = useRef(route)
  const preserveNextRouteRef = useRef(false)

  const resetPageData = () => {
    setSimulationData(EMPTY_SIMULATION)
    setLeadData(EMPTY_LEAD)
    setPromptData(EMPTY_PROMPT)
    setResult(null)
  }

  useEffect(() => {
    const unsubscribe = subscribeToRouteChanges(() => {
      const nextRoute = getCurrentRoute()

      if (nextRoute !== routeRef.current) {
        if (!preserveNextRouteRef.current) {
          resetPageData()
        }

        preserveNextRouteRef.current = false
        routeRef.current = nextRoute
        setRoute(nextRoute)
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.documentTitle
  }, [t])

  const navigateWithReset = (nextRoute, { preserve = false } = {}) => {
    preserveNextRouteRef.current = preserve

    if (!preserve) {
      resetPageData()
    }

    navigateTo(nextRoute)
  }

  const handleStart = () => {
    navigateWithReset(ROUTES.SIMULATOR)
  }

  const handleOpenPromptBuilder = () => {
    navigateWithReset(ROUTES.PROMPT_BUILDER)
  }

  const handleSimulationChange = (nextData) => {
    setSimulationData(nextData)
  }

  const handleCalculate = (values) => {
    const breakEvenPoint = calculateBreakEvenPoint(values)
    const nextResult = {
      ...values,
      breakEvenPoint,
      generatedAt: new Date().toISOString(),
    }

    setSimulationData(values)
    setResult(nextResult)
    navigateWithReset(ROUTES.RESULT, { preserve: true })
  }

  const handleLeadChange = (nextData) => {
    setLeadData(nextData)
  }

  const handleLeadSubmit = (values) => {
    setLeadData(values)
    window.alert(t.alertLeadSaved)
  }

  const handlePromptChange = (nextData) => {
    setPromptData(nextData)
  }

  const handleLocaleChange = (nextLocale) => {
    resetPageData()
    setLocale(nextLocale)
    saveLocale(nextLocale)
  }

  const renderPage = () => {
    switch (route) {
      case ROUTES.LANDING:
        return <LandingPage onStart={handleStart} onOpenPromptBuilder={handleOpenPromptBuilder} locale={locale} />
      case ROUTES.SIMULATOR:
        return (
          <SimulatorPage
            initialValues={simulationData}
            onCalculate={handleCalculate}
            onChange={handleSimulationChange}
            locale={locale}
          />
        )
      case ROUTES.PROMPT_BUILDER:
        return <PromptBuilderPage initialValues={promptData} onChange={handlePromptChange} locale={locale} />
      case ROUTES.RESULT:
        return (
          <ResultPage
            result={result}
            onContinue={() => navigateWithReset(ROUTES.LEAD_FORM)}
            onRecalculate={() => navigateWithReset(ROUTES.SIMULATOR)}
            locale={locale}
          />
        )
      case ROUTES.LEAD_FORM:
        return (
          <LeadFormPage
            initialValues={leadData}
            onChange={handleLeadChange}
            onSubmit={handleLeadSubmit}
            locale={locale}
          />
        )
      default:
        return <LandingPage onStart={handleStart} onOpenPromptBuilder={handleOpenPromptBuilder} locale={locale} />
    }
  }

  return (
    <AppLayout
      currentRoute={route}
      currentRouteLabel={getRouteLabel(route, t.routes)}
      locale={locale}
      onLocaleChange={handleLocaleChange}
      onNavigate={navigateWithReset}
    >
      {renderPage()}
    </AppLayout>
  )
}

export default App
