import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Star, User2 } from 'lucide-react'
import './TestimonialsSection.css'

const TESTIMONIALS = [
  {
    name: 'Sheeba Duleep',
    country: 'IN',
    reviewCount: '1 review',
    date: 'Jan 19, 2025',
    title: 'It was very insightful',
    text: 'Bit overwhelmed at the moment, and I hope the business coaches will be able to help me wade through and come out to devise successful strategies for my life and business.',
    exp: 'January 19, 2025',
    rating: 5,
  },
  {
    name: 'Aamod Dharmadhikari',
    country: 'IN',
    reviewCount: '1 review',
    date: 'Jan 18, 2025',
    title: 'It was very insightful',
    text: 'It was very insightful. Rajiv’s clarity is amazing. Everything that is happening in my business and life, which I thought were on my problems and issues, was already known to Rajiv, and it made me realise that all of us business owners have the same issues and should also be able to solve them by taking the steps suggested in this programme.',
    exp: 'January 18, 2025',
    rating: 5,
  },
  {
    name: 'Riya Shah',
    country: 'IN',
    reviewCount: '1 review',
    date: 'Jan 10, 2025',
    title: 'Structured and practical',
    text: 'The guidance was structured and practical. I now have clarity on what to do next and how to execute step-by-step.',
    exp: 'January 10, 2025',
    rating: 5,
  },
  {
    name: 'Kunal Mehta',
    country: 'IN',
    reviewCount: '1 review',
    date: 'Jan 05, 2025',
    title: 'Very helpful',
    text: 'Great session. I got actionable insights on operations and marketing which I could implement immediately.',
    exp: 'January 05, 2025',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="nt-testi__stars" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'nt-testi__star nt-testi__star--on' : 'nt-testi__star'}>
          <Star size={14} />
        </span>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const cardRef = useRef(null)

  const [index, setIndex] = useState(0)
  const [stepPx, setStepPx] = useState(0)
  const [maxIndex, setMaxIndex] = useState(Math.max(0, TESTIMONIALS.length - 1))

  useEffect(() => {
    const update = () => {
      const card = cardRef.current
      const track = trackRef.current
      if (!card || !track) return

      const styles = window.getComputedStyle(track)
      const gap = parseFloat(styles.columnGap || styles.gap || '0')

      const cardW = card.getBoundingClientRect().width
      const step = cardW + gap
      setStepPx(step)

      const viewportW = viewportRef.current?.getBoundingClientRect().width ?? 0
      const visibleCount = viewportW > 0 ? Math.max(1, Math.round((viewportW + gap) / (cardW + gap))) : 1
      const nextMaxIndex = Math.max(0, TESTIMONIALS.length - visibleCount)
      setMaxIndex(nextMaxIndex)
      setIndex((i) => Math.min(i, nextMaxIndex))
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  return (
    <section className="nt-testi">
      <div className="nt-testi__bg" aria-hidden="true">
        <img className="nt-testi__ellipse nt-testi__ellipse--a" src="/media/Ellipse.svg" alt="" />
        <img className="nt-testi__ellipse nt-testi__ellipse--b" src="/media/Ellipse-sm.svg" alt="" />
      </div>

      <div className="nt-testi__container">
        <div className="nt-testi__header">
          <div className="nt-testi__titleWrap">
            <div className="nt-testi__kicker">What they say about me</div>
            <h2 className="nt-testi__title">TESTIMONIALS</h2>
          </div>

          <div className="nt-testi__rightTop">
            <div className="nt-testi__quoteBadge" aria-hidden="true">“</div>
            <div className="nt-testi__nav">
              <button className="nt-testi__navBtn" type="button" aria-label="Previous" onClick={prev} disabled={index === 0}>
                <ArrowLeft size={18} />
              </button>
              <button
                className="nt-testi__navBtn"
                type="button"
                aria-label="Next"
                onClick={next}
                disabled={index === maxIndex}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div ref={viewportRef} className="nt-testi__viewport">
          <div
            ref={trackRef}
            className="nt-testi__track"
            style={{ transform: `translate3d(${-index * stepPx}px, 0, 0)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <article key={`${t.name}-${t.date}`} ref={i === 0 ? cardRef : undefined} className="nt-testi__card">
                <div className="nt-testi__cardTop">
                  <div className="nt-testi__avatar" aria-hidden="true">
                    <User2 size={20} />
                  </div>
                  <div className="nt-testi__meta">
                    <div className="nt-testi__name">{t.name}</div>
                    <div className="nt-testi__sub">
                      <span>{t.reviewCount}</span>
                      <span className="nt-testi__dot" aria-hidden="true">•</span>
                      <span>{t.country}</span>
                    </div>
                  </div>
                  <div className="nt-testi__date">{t.date}</div>
                </div>

                <div className="nt-testi__divider" aria-hidden="true" />

                <Stars count={t.rating} />

                <div className="nt-testi__cardTitle">{t.title}</div>
                <div className="nt-testi__text">{t.text}</div>

                <div className="nt-testi__exp">
                  <span className="nt-testi__expLabel">Date of experience:</span> {t.exp}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
