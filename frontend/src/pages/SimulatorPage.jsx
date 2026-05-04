import { useEffect, useState } from 'react'
import FormField from '../components/FormField'
import PrimaryButton from '../components/PrimaryButton'
import { validateSimulationInputs } from '../utils/validation'
import { getTranslations } from '../utils/translations'

function SimulatorPage({ initialValues, onCalculate, onChange, locale }) {
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
    const nextErrors = validateSimulationInputs(values, locale)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    onCalculate({
      fixedCosts: Number(values.fixedCosts),
      variableCost: Number(values.variableCost),
      sellingPrice: Number(values.sellingPrice),
    })
  }

  return (
    <section className="page-grid">
      <form className="panel-card form-card" onSubmit={handleSubmit}>
        <div className="section-header">
          <p className="eyebrow">{t.simulator.eyebrow}</p>
          <h2>{t.simulator.title}</h2>
          <p>{t.simulator.subtitle}</p>
        </div>

        <div className="form-grid">
          <FormField
            id="fixedCosts"
            label={t.simulator.fixedCosts}
            type="number"
            min="0"
            step="0.01"
            value={values.fixedCosts}
            onChange={handleFieldChange}
            placeholder="5000"
            error={errors.fixedCosts}
          />
          <FormField
            id="variableCost"
            label={t.simulator.variableCost}
            type="number"
            min="0"
            step="0.01"
            value={values.variableCost}
            onChange={handleFieldChange}
            placeholder="12"
            error={errors.variableCost}
          />
          <FormField
            id="sellingPrice"
            label={t.simulator.sellingPrice}
            type="number"
            min="0"
            step="0.01"
            value={values.sellingPrice}
            onChange={handleFieldChange}
            placeholder="30"
            error={errors.sellingPrice}
          />
        </div>

        <PrimaryButton type="submit">{t.simulator.calculate}</PrimaryButton>
      </form>

      <aside className="panel-card info-card">
        <p className="eyebrow">{t.simulator.guideEyebrow}</p>
        <h3>{t.simulator.guideTitle}</h3>
        <p className="formula-copy">{t.simulator.formula}</p>
        <p className="support-copy">{t.simulator.guideText}</p>
        <div className="mini-card-list">
          <div className="mini-card">
            <strong>{t.simulator.tipTitle}</strong>
            <span>{t.simulator.tipText}</span>
          </div>
          <div className="mini-card">
            <strong>{t.simulator.reminderTitle}</strong>
            <span>{t.simulator.reminderText}</span>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default SimulatorPage
