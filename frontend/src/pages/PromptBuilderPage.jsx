import { useEffect, useMemo, useState } from 'react'
import FormField from '../components/FormField'
import PrimaryButton from '../components/PrimaryButton'
import { buildResearchPrompt, validatePromptInputs } from '../utils/promptBuilder'
import { getTranslations } from '../utils/translations'

function PromptBuilderPage({ initialValues, onChange, locale }) {
  const t = getTranslations(locale)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [copied, setCopied] = useState(false)
  const [showCollectModal, setShowCollectModal] = useState(false)
  const [collectErrors, setCollectErrors] = useState({})
  const [collectValues, setCollectValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  })

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  const generatedPrompt = useMemo(() => buildResearchPrompt({ ...values, locale }), [values, locale])

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    const nextValues = {
      ...values,
      [name]: value,
    }

    setValues(nextValues)
    onChange(nextValues)
    setCopied(false)
  }

  const handleCopyPrompt = async () => {
    const nextErrors = validatePromptInputs(values, locale)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setShowCollectModal(true)
  }

  const handleCollectFieldChange = (event) => {
    const { name, value } = event.target
    setCollectValues((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const validateCollectValues = () => {
    const nextErrors = {}

    if (!collectValues.name.trim()) {
      nextErrors.name = t.promptBuilder.collect.errors.name
    }

    if (!collectValues.email.trim()) {
      nextErrors.email = t.promptBuilder.collect.errors.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(collectValues.email)) {
      nextErrors.email = t.promptBuilder.collect.errors.emailInvalid
    }

    return nextErrors
  }

  const handleCollectSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateCollectValues()
    setCollectErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    try {
      await window.navigator.clipboard.writeText(generatedPrompt)
      setCopied(true)
      setShowCollectModal(false)
    } catch {
      window.alert(t.promptBuilder.copyError)
    }
  }

  return (
    <>
      <section className="prompt-single-shell">
        <article className="panel-card form-card prompt-form-card prompt-form-card-wide">
          <div className="section-header">
            <p className="eyebrow">{t.promptBuilder.eyebrow}</p>
            <h2 className="prompt-page-title">{t.promptBuilder.title}</h2>
            <p className="prompt-page-subtitle">{t.promptBuilder.subtitle}</p>
          </div>

          <div className="prompt-steps-strip">
            <div className="prompt-step-pill">
              <strong>1</strong>
              <span>Remplir</span>
            </div>
            <div className="prompt-step-pill">
              <strong>2</strong>
              <span>Verifier</span>
            </div>
            <div className="prompt-step-pill">
              <strong>3</strong>
              <span>Copier</span>
            </div>
          </div>

          <div className="prompt-inline-status">
            <span className="prompt-inline-label">{t.promptBuilder.outputEyebrow}</span>
            <span className="copy-status">{copied ? t.promptBuilder.copied : t.promptBuilder.autoUpdate}</span>
          </div>

          <div className="form-grid prompt-form-grid">
            <FormField
              id="companyType"
              label={t.promptBuilder.companyType}
              value={values.companyType}
              onChange={handleFieldChange}
              placeholder={t.promptBuilder.placeholders.companyType}
              required
              error={errors.companyType}
            />
            <FormField
              id="companyStage"
              label={t.promptBuilder.companyStage}
              value={values.companyStage}
              onChange={handleFieldChange}
              placeholder={t.promptBuilder.placeholders.companyStage}
              required
              error={errors.companyStage}
            />
            <FormField
              id="market"
              label={t.promptBuilder.market}
              value={values.market}
              onChange={handleFieldChange}
              placeholder={t.promptBuilder.placeholders.market}
              required
              error={errors.market}
            />

            <label className="field-group" htmlFor="questionGoal">
              <span className="field-label">{t.promptBuilder.questionGoal}</span>
              <select
                id="questionGoal"
                name="questionGoal"
                value={values.questionGoal}
                onChange={handleFieldChange}
                className="input-control"
              >
                {t.promptBuilder.goals.map((goal) => (
                  <option key={goal.value} value={goal.value}>
                    {goal.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-grid">
            <FormField
              id="userQuestion"
              label={t.promptBuilder.userQuestion}
              value={values.userQuestion}
              onChange={handleFieldChange}
              placeholder={t.promptBuilder.placeholders.userQuestion}
              required
              error={errors.userQuestion}
              textarea
            />
            <FormField
              id="constraints"
              label={t.promptBuilder.constraints}
              value={values.constraints}
              onChange={handleFieldChange}
              placeholder={t.promptBuilder.placeholders.constraints}
              textarea
            />
          </div>

          <div className="cta-row">
            <PrimaryButton onClick={handleCopyPrompt}>{t.promptBuilder.copy}</PrimaryButton>
          </div>

          <div className="prompt-hidden-summary">
            <div className="section-header prompt-hidden-summary-header">
              <p className="eyebrow">{t.promptBuilder.outputEyebrow}</p>
              <h3>{t.promptBuilder.outputTitle}</h3>
              <p>{t.promptBuilder.outputText}</p>
              <p className="prompt-preview-hint">{t.promptBuilder.previewHint}</p>
            </div>

            <div className="prompt-summary-box">
              <div className="prompt-summary-pill">Prompt interne masque</div>
              <p>
                Le prompt final n est pas affiche a l utilisateur. Il est prepare automatiquement en arriere-plan
                puis copie dans le presse-papiers apres validation du formulaire d information.
              </p>
            </div>
          </div>

          <div className="mini-card-list prompt-bottom-cards">
            {t.promptBuilder.cards.map((card) => (
              <div key={card.title} className="mini-card">
                <strong>{card.title}</strong>
                <span>{card.text}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="prompt-invisible-copy-source" aria-hidden="true">
          <pre>{generatedPrompt}</pre>
        </div>
      </section>

      {showCollectModal ? (
        <div className="modal-overlay" role="presentation" onClick={() => setShowCollectModal(false)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="section-header modal-header">
              <p className="eyebrow">{t.promptBuilder.eyebrow}</p>
              <h3>{t.promptBuilder.collect.title}</h3>
              <p>{t.promptBuilder.collect.subtitle}</p>
            </div>

            <form className="form-grid modal-form-grid" onSubmit={handleCollectSubmit}>
              <FormField
                id="name"
                label={t.promptBuilder.collect.name}
                value={collectValues.name}
                onChange={handleCollectFieldChange}
                placeholder={t.promptBuilder.collect.placeholders.name}
                required
                error={collectErrors.name}
              />
              <FormField
                id="email"
                label={t.promptBuilder.collect.email}
                type="email"
                value={collectValues.email}
                onChange={handleCollectFieldChange}
                placeholder={t.promptBuilder.collect.placeholders.email}
                required
                error={collectErrors.email}
              />
              <FormField
                id="company"
                label={t.promptBuilder.collect.company}
                value={collectValues.company}
                onChange={handleCollectFieldChange}
                placeholder={t.promptBuilder.collect.placeholders.company}
              />
              <FormField
                id="phone"
                label={t.promptBuilder.collect.phone}
                value={collectValues.phone}
                onChange={handleCollectFieldChange}
                placeholder={t.promptBuilder.collect.placeholders.phone}
              />

              <div className="cta-row modal-actions">
                <PrimaryButton type="button" secondary onClick={() => setShowCollectModal(false)}>
                  {t.promptBuilder.collect.cancel}
                </PrimaryButton>
                <PrimaryButton type="submit">{t.promptBuilder.collect.submit}</PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default PromptBuilderPage
