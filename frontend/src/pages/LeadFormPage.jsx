import { useEffect, useState } from 'react'
import FormField from '../components/FormField'
import PrimaryButton from '../components/PrimaryButton'
import { validateLeadInputs } from '../utils/validation'
import { getTranslations } from '../utils/translations'

function LeadFormPage({ initialValues, onChange, onSubmit, locale }) {
  const t = getTranslations(locale)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    const nextValues = {
      ...values,
      [name]: value,
    }

    setValues(nextValues)
    onChange(nextValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateLeadInputs(values, locale)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    onSubmit(values)
  }

  return (
    <section className="page-grid">
      <form className="panel-card form-card" onSubmit={handleSubmit}>
        <div className="section-header">
          <p className="eyebrow">{t.lead.eyebrow}</p>
          <h2>{t.lead.title}</h2>
          <p>{t.lead.subtitle}</p>
        </div>

        <div className="form-grid">
          <FormField
            id="name"
            label={t.lead.name}
            value={values.name}
            onChange={handleFieldChange}
            placeholder={t.lead.placeholders.name}
            required
            error={errors.name}
          />
          <FormField
            id="email"
            label={t.lead.email}
            type="email"
            value={values.email}
            onChange={handleFieldChange}
            placeholder={t.lead.placeholders.email}
            required
            error={errors.email}
          />
          <FormField
            id="phone"
            label={t.lead.phone}
            type="tel"
            value={values.phone}
            onChange={handleFieldChange}
            placeholder={t.lead.placeholders.phone}
            hint={t.lead.phoneHint}
          />
          <FormField
            id="projectDescription"
            label={t.lead.projectDescription}
            value={values.projectDescription}
            onChange={handleFieldChange}
            placeholder={t.lead.placeholders.projectDescription}
            required
            error={errors.projectDescription}
            textarea
          />
        </div>

        <PrimaryButton type="submit">{t.lead.submit}</PrimaryButton>
      </form>

      <aside className="panel-card info-card">
        <p className="eyebrow">{t.lead.whyEyebrow}</p>
        <h3>{t.lead.whyTitle}</h3>
        <p>{t.lead.whyText}</p>
        <div className="mini-card-list">
          {t.lead.cards.map((card) => (
            <div key={card.title} className="mini-card">
              <strong>{card.title}</strong>
              <span>{card.text}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}

export default LeadFormPage
