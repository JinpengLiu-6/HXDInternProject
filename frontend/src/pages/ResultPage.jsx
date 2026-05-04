import PrimaryButton from '../components/PrimaryButton'
import ResultSummary from '../components/ResultSummary'
import { getTranslations } from '../utils/translations'

function ResultPage({ result, onContinue, onRecalculate, locale }) {
  const t = getTranslations(locale)

  return (
    <section className="page-grid">
      <article className="panel-card">
        <div className="section-header">
          <p className="eyebrow">{t.result.eyebrow}</p>
          <h2>{t.result.title}</h2>
          <p>{t.result.subtitle}</p>
        </div>

        <ResultSummary result={result} locale={locale} />

        {result ? (
          <section className="breakdown-grid">
            <article className="data-tile">
              <span>{t.result.fixedCosts}</span>
              <strong>{result.fixedCosts}</strong>
            </article>
            <article className="data-tile">
              <span>{t.result.variableCost}</span>
              <strong>{result.variableCost}</strong>
            </article>
            <article className="data-tile">
              <span>{t.result.sellingPrice}</span>
              <strong>{result.sellingPrice}</strong>
            </article>
          </section>
        ) : null}

        <section className="insight-card">
          <p className="eyebrow">{t.result.explanationEyebrow}</p>
          <p>{t.result.explanation}</p>
        </section>

        <section className="insight-card">
          <p className="eyebrow">{t.result.aiEyebrow}</p>
          <p>{t.result.aiText}</p>
        </section>

        <div className="cta-row">
          <PrimaryButton onClick={onContinue} disabled={!result}>
            {t.result.continue}
          </PrimaryButton>
          <PrimaryButton secondary onClick={onRecalculate}>
            {t.result.recalculate}
          </PrimaryButton>
        </div>
      </article>

      <aside className="panel-card info-card">
        <p className="eyebrow">{t.result.nextEyebrow}</p>
        <h3>{t.result.nextTitle}</h3>
        <p>{t.result.nextText}</p>
      </aside>
    </section>
  )
}

export default ResultPage
