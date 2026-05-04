import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { getTranslations } from '../utils/translations'

function LandingPage({ onStart, onOpenPromptBuilder, locale }) {
  const t = getTranslations(locale)
  const { featureCards, steps, quickActions, testimonials, faqs, hero, sections } = t.landing
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const handleQuickAction = (action) => {
    if (action === 'prompt') {
      onOpenPromptBuilder()
      return
    }

    onStart()
  }

  return (
    <div className="landing-stack corporate-stack">
      <section className="hero-corporate">
        <div className="hero-content-grid">
          <div className="hero-copy-panel hero-copy-panel-corporate">
            <span className="hero-pill">{hero.pill}</span>
            <h2 className="hero-title">{hero.title}</h2>
            <p className="hero-subtitle">{hero.subtitle}</p>

            <div className="cta-row hero-actions">
              <PrimaryButton className="button-large button-glow" onClick={onStart}>
                {hero.primaryCta}
              </PrimaryButton>
              <PrimaryButton className="button-large button-secondary-blue" secondary onClick={onOpenPromptBuilder}>
                {hero.secondaryCta}
              </PrimaryButton>
            </div>

            <div className="hero-microproof hero-microproof-corporate">
              {hero.proofs.map((proof) => (
                <div key={proof.strong} className="microproof-card">
                  <strong>{proof.strong}</strong>
                  <span>{proof.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-panel hero-visual-panel-corporate">
            <div className="hero-service-panel">
              <div className="hero-service-head">
                <span className="hero-service-kicker">{hero.serviceKicker}</span>
                <h3>{hero.serviceTitle}</h3>
                <p>{hero.serviceSubtitle}</p>
              </div>

              <div className="hero-service-list">
                {quickActions.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`hero-service-card${item.action === 'prompt' ? ' hero-service-card-alt' : ''}`}
                    onClick={() => handleQuickAction(item.action)}
                  >
                    <div className="hero-service-top">
                      <span className="quick-action-label">{item.label}</span>
                      <span className="hero-service-arrow">→</span>
                    </div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                    <span className="hero-service-link">{item.cta}</span>
                  </button>
                ))}
              </div>

              <div className="hero-mini-note">{hero.serviceNote}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-actions-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">{sections.quickStartEyebrow}</p>
            <h3 className="section-title">{sections.quickStartTitle}</h3>
          </div>
        </div>

        <div className="quick-actions-grid">
          {quickActions.map((item) => (
            <article key={item.title} className="quick-action-card">
              <span className="quick-action-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <PrimaryButton
                className={`quick-action-button${item.action === 'prompt' ? ' button-secondary-blue' : ''}`}
                secondary={item.action === 'prompt'}
                onClick={() => handleQuickAction(item.action)}
              >
                {item.cta}
              </PrimaryButton>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-band">
        <div className="trust-brand">
          <span className="eyebrow">{sections.trustEyebrow}</span>
          <h3 className="section-title">{sections.trustTitle}</h3>
        </div>
        <div className="trust-logos">
          {sections.trustLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">{sections.featuresEyebrow}</p>
            <h3 className="section-title">{sections.featuresTitle}</h3>
          </div>
        </div>

        <div className="feature-card-grid feature-card-grid-wide">
          {featureCards.map((feature) => (
            <article key={feature.title} className="feature-card-modern">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-preview-section">
        <div className="product-preview-copy">
          <p className="eyebrow">{sections.previewEyebrow}</p>
          <h3 className="section-title">{sections.previewTitle}</h3>
          <p className="section-description">{sections.previewText}</p>
          <div className="cta-row">
            <PrimaryButton className="button-large" onClick={onStart}>
              {sections.previewPrimaryCta}
            </PrimaryButton>
            <PrimaryButton className="button-large" secondary onClick={onOpenPromptBuilder}>
              {sections.previewSecondaryCta}
            </PrimaryButton>
          </div>
        </div>

        <div className="preview-metrics">
          {sections.previewMetrics.map((metric) => (
            <article key={metric.strong} className="metric-panel">
              <span>{metric.label}</span>
              <strong>{metric.strong}</strong>
              <small>{metric.text}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">{sections.stepsEyebrow}</p>
            <h3 className="section-title">{sections.stepsTitle}</h3>
          </div>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.title} className="step-card">
              <div className="step-badge">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">{sections.testimonialsEyebrow}</p>
            <h3 className="section-title">{sections.testimonialsTitle}</h3>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-meta">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">{sections.faqEyebrow}</p>
            <h3 className="section-title">{sections.faqTitle}</h3>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = index === openFaqIndex

            return (
              <button
                key={faq.question}
                type="button"
                className={`faq-item${isOpen ? ' faq-item-open' : ''}`}
                onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
              >
                <div className="faq-question-row">
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
                </div>
                {isOpen ? <p className="faq-answer">{faq.answer}</p> : null}
              </button>
            )
          })}
        </div>

        <div className="final-cta-band">
          <div>
            <p className="eyebrow">{sections.finalEyebrow}</p>
            <h3 className="section-title">{sections.finalTitle}</h3>
          </div>
          <PrimaryButton className="button-large button-glow" onClick={onStart}>
            {sections.finalCta}
          </PrimaryButton>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
