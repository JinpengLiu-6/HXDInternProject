import { formatBreakEvenValue } from '../utils/formatters'
import { getTranslations } from '../utils/translations'

function ResultSummary({ result, locale }) {
  const t = getTranslations(locale)
  const formattedValue = result ? formatBreakEvenValue(result.breakEvenPoint, t.formatLocale) : null

  if (!result) {
    return (
      <div className="empty-state">
        <h3>{t.result.summary.emptyTitle}</h3>
        <p>{t.result.summary.emptyText}</p>
      </div>
    )
  }

  return (
    <section className="result-highlight">
      <div>
        <p className="stat-label">{t.result.summary.label}</p>
        <strong className="stat-value">
          {formattedValue} {t.result.summary.unit}
        </strong>
      </div>
      <p className="stat-copy">
        {t.result.summary.textPrefix} {formattedValue} {t.result.summary.textSuffix}
      </p>
    </section>
  )
}

export default ResultSummary
