import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="nt-hero">
      <div className="nt-hero__bg" aria-hidden="true" />

      <div className="nt-hero__container">
        <div className="nt-hero__content">
          <h1 className="nt-hero__title">
            Empowering Businesses with Strategy,
            <br />
            Structure & Smart Growth
          </h1>

          <p className="nt-hero__subtitle">
            Strategic consulting for Startups, SMEs, and Enterprises—delivering clarity, efficiency, and long-term
            success.
          </p>

          <div className="nt-hero__ctaRow">
            <Link className="nt-hero__cta" to="/book">
              Book a Consultation
            </Link>
            <Link className="nt-hero__ctaIcon" to="/book" aria-label="Book a Consultation">
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="nt-hero__visual">
          <div className="nt-hero__circle" aria-hidden="true" />
          <img className="nt-hero__image" src="/media/hero-side-img.webp" alt="Business consultant" />
        </div>
      </div>
    </section>
  )
}
