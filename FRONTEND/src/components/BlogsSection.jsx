import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './BlogsSection.css'

const BLOGS = [
  {
    id: 'b1',
    img: '/media/blog1.webp',
    tag: '11 Ways to Delegate Effectively for\nBusiness Owners in 2026',
    date: '14\nSUN',
    title: '11 Ways to Delegate Effectively for Business Owners in 2026',
    excerpt: 'Feeling overwhelmed? No time for strategy, family, or even a…',
  },
  {
    id: 'b2',
    img: '/media/blog2.webp',
    tag: '4 Ways to Build\nBrand Identity',
    date: '13\nSAT',
    title: '4 Ways to Build Brand Identity For MSMEs Without a Big Budget',
    excerpt: 'Want a brand like Nike? Don’t copy them. It’s a…',
  },
  {
    id: 'b3',
    img: '/media/blog1.webp',
    tag: '11 Recruitment Tips\nTo Hire the Right People',
    date: '12\nFRI',
    title: '11 Recruitment Tips to Build a High-Performing & Dependable Team',
    excerpt: 'Tired of bad hires? Check out these 11 recruitment tips',
  },
  {
    id: 'b4',
    img: '/media/blog2.webp',
    tag: 'Marketing Systems\nThat Scale',
    date: '10\nWED',
    title: 'Marketing Systems That Scale: A Practical Playbook',
    excerpt: 'Build repeatable systems so growth doesn’t depend on luck.',
  },
  {
    id: 'b5',
    img: '/media/blog1.webp',
    tag: 'Operations\nOptimization',
    date: '09\nTUE',
    title: 'Operations Optimization: Simple Changes That Improve Profit',
    excerpt: 'Reduce waste, tighten processes, and improve margins.',
  },
]

export default function BlogsSection() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const firstCardRef = useRef(null)
  const viewportRef = useRef(null)
  const [stepPx, setStepPx] = useState(0)
  const [maxIndex, setMaxIndex] = useState(Math.max(0, BLOGS.length - 1))

  useEffect(() => {
    const update = () => {
      const card = firstCardRef.current
      if (!card) return
      const styles = window.getComputedStyle(trackRef.current)
      const gap = parseFloat(styles.columnGap || styles.gap || '0')

      const cardW = card.getBoundingClientRect().width
      const step = cardW + gap
      setStepPx(step)

      const viewportW = viewportRef.current?.getBoundingClientRect().width ?? 0
      const visibleCount = viewportW > 0 ? Math.max(1, Math.round((viewportW + gap) / (cardW + gap))) : 1
      const nextMaxIndex = Math.max(0, BLOGS.length - visibleCount)
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
    <section className="nt-blogs">
      <div className="nt-blogs__inner">
        <aside className="nt-blogs__left">
          <div className="nt-blogs__kicker">Proven Business Insights &amp; Strategies for MSMEs</div>
          <div className="nt-blogs__title">BLOGS</div>

          <Link className="nt-blogs__all" to="/blog">
            ALL BLOGS <span aria-hidden="true">→</span>
          </Link>

          <div className="nt-blogs__nav">
            <button className="nt-blogs__navBtn" type="button" aria-label="Previous" onClick={prev} disabled={index === 0}>
              <ArrowLeft size={18} />
            </button>
            <button
              className="nt-blogs__navBtn"
              type="button"
              aria-label="Next"
              onClick={next}
              disabled={index === maxIndex}
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <img className="nt-blogs__arrow" src="/media/blogs-arrow.png" alt="" aria-hidden="true" />
        </aside>

        <div className="nt-blogs__right">
          <div ref={viewportRef} className="nt-blogs__viewport">
            <div
              ref={trackRef}
              className="nt-blogs__track"
              style={{ transform: `translate3d(${-index * stepPx}px, 0, 0)` }}
            >
              {BLOGS.map((b, i) => (
                <article key={b.id} ref={i === 0 ? firstCardRef : undefined} className="nt-blogCard">
                  <div className="nt-blogCard__media">
                    <img className="nt-blogCard__img" src={b.img} alt={b.title} />
                    <div className="nt-blogCard__tag">{b.tag.split('\n').map((x) => x).join(' ')}</div>
                    <div className="nt-blogCard__date">
                      {b.date.split('\n').map((line, idx) => (
                        <span key={idx}>{line}</span>
                      ))}
                    </div>
                  </div>

                  <div className="nt-blogCard__title">{b.title}</div>
                  <div className="nt-blogCard__excerpt">{b.excerpt}</div>
                  <div className="nt-blogCard__line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
