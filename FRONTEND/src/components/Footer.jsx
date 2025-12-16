import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')

  const socials = useMemo(
    () => [
      { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
      { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
      { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
      { icon: Twitter, label: 'X', href: 'https://x.com' },
      { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
    [],
  )

  const onBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="nt-footer">
      {/* <div className="nt-footer__topBar">
        <div className="nt-footer__topInner">
          <div>
            <div className="nt-footer__topTitle">The P.A.C.E Program</div>
            <div className="nt-footer__topSub">Let’s scale your business with the right systems!</div>
          </div>
          <Link className="nt-footer__register" to="/book">
            REGISTER NOW
          </Link>
        </div>
      </div> */}

      <div className="nt-footer__yellowBar">
        <div className="nt-footer__yellowInner">
          <img className="nt-footer__logo" src="/media/black-logo.png" alt="NT Consultancy" />

          <div className="nt-footer__socials">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  className="nt-footer__social"
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>

        </div>
      </div>

      <div className="nt-footer__main">
        <div className="nt-footer__bg" aria-hidden="true">
          <img className="nt-footer__ellipse nt-footer__ellipse--a" src="/media/Ellipse.svg" alt="" />
          <img className="nt-footer__ellipse nt-footer__ellipse--b" src="/media/Ellipse-sm.svg" alt="" />
        </div>

        <div className="nt-footer__container">
          <div className="nt-footer__headerRow">
            <div className="nt-footer__entity">
              NT Consultancy is an entity of NT Consultancy
            </div>

            <button className="nt-footer__back" type="button" onClick={onBackToTop}>
              <span>Back to top</span>
              <span className="nt-footer__backIcon" aria-hidden="true">
                <ArrowUp size={16} />
              </span>
            </button>
          </div>

          <div className="nt-footer__grid">
            <div className="nt-footer__col">
              <Link className="nt-footer__link" to="/">Home</Link>
              <Link className="nt-footer__link" to="/about">About</Link>
              <Link className="nt-footer__link" to="/services">Services</Link>
              <Link className="nt-footer__link" to="/book">Book</Link>
              <Link className="nt-footer__link" to="/blog">Blogs</Link>
            </div>

            <div className="nt-footer__col">
              <Link className="nt-footer__link" to="/terms">Terms &amp; Conditions</Link>
              <Link className="nt-footer__link" to="/contact">Contact Us</Link>
              <Link className="nt-footer__link" to="/sitemap">Sitemap</Link>
              <Link className="nt-footer__link" to="/faq">FAQs</Link>
            </div>

            <div className="nt-footer__col">
              <div className="nt-footer__colTitle">Programs</div>
              <Link className="nt-footer__link" to="/programs">P.A.C.E</Link>
              <Link className="nt-footer__link" to="/programs">M.B.A</Link>
              <Link className="nt-footer__link" to="/programs">B.G.C</Link>
            </div>

            <div className="nt-footer__newsletter">
              <div className="nt-footer__newsTitle">Subscribe to our newsletter</div>
              <div className="nt-footer__newsSub">Be the first to receive any new updates</div>

              <form className="nt-footer__form" onSubmit={onSubmit}>
                <span className="nt-footer__mail" aria-hidden="true">
                  <Send size={16} />
                </span>
                <input
                  className="nt-footer__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  type="email"
                />
                <button className="nt-footer__submit" type="submit" aria-label="Submit">
                  <span className="nt-footer__submitIcon" aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>

          <div className="nt-footer__divider" aria-hidden="true" />
          <div className="nt-footer__copy">© Copyright NT Consultancy</div>
        </div>
      </div>
    </footer>
  )
}
