import { ArrowRight, CheckCircle2, ClipboardList, Target, TrendingUp, Users2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import './AboutPageSections.css'

export default function AboutPageSections() {
  return (
    <div className="nt-aboutPage">
      <section className="nt-aboutPage__section nt-aboutPage__intro">
        <div className="nt-aboutPage__container">
          <div className="nt-aboutPage__introGrid">
            <div>
              <div className="nt-aboutPage__kicker">About NT Consultancy</div>
              <h1 className="nt-aboutPage__title">Clarity. Systems. Execution.</h1>
              <p className="nt-aboutPage__text">
                NT Consultancy is a business growth and consulting practice focused on helping MSMEs build clarity, improve
                systems, and execute consistently. We work with owners and leadership teams to strengthen strategy,
                marketing, sales, operations, and people performance.
              </p>

              <div className="nt-aboutPage__pillRow">
                <div className="nt-aboutPage__pill">
                  <CheckCircle2 size={16} /> Structured Approach
                </div>
                <div className="nt-aboutPage__pill">
                  <CheckCircle2 size={16} /> Practical Execution
                </div>
                <div className="nt-aboutPage__pill">
                  <CheckCircle2 size={16} /> Measurable Outcomes
                </div>
              </div>
            </div>

            <div className="nt-aboutPage__introCard">
              <div className="nt-aboutPage__stat">
                <div className="nt-aboutPage__statNum">01</div>
                <div className="nt-aboutPage__statLabel">Diagnose bottlenecks</div>
              </div>
              <div className="nt-aboutPage__stat">
                <div className="nt-aboutPage__statNum">02</div>
                <div className="nt-aboutPage__statLabel">Build systems & processes</div>
              </div>
              <div className="nt-aboutPage__stat">
                <div className="nt-aboutPage__statNum">03</div>
                <div className="nt-aboutPage__statLabel">Drive execution & reviews</div>
              </div>
              <div className="nt-aboutPage__stat">
                <div className="nt-aboutPage__statNum">04</div>
                <div className="nt-aboutPage__statLabel">Scale sustainably</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nt-aboutPage__section nt-aboutPage__mv">
        <div className="nt-aboutPage__container">
          <div className="nt-aboutPage__two">
            <div className="nt-aboutPage__mvCard">
              <div className="nt-aboutPage__mvIcon" aria-hidden="true">
                <Target size={18} />
              </div>
              <div className="nt-aboutPage__mvTitle">Our Mission</div>
              <p className="nt-aboutPage__mvText">
                To empower businesses with clarity, strategy, and structured support—so they operate efficiently and achieve
                consistent success.
              </p>
            </div>

            <div className="nt-aboutPage__mvCard">
              <div className="nt-aboutPage__mvIcon" aria-hidden="true">
                <TrendingUp size={18} />
              </div>
              <div className="nt-aboutPage__mvTitle">Our Vision</div>
              <p className="nt-aboutPage__mvText">
                To become a trusted partner for entrepreneurs by delivering sustainable growth solutions and elevating
                performance across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nt-aboutPage__section nt-aboutPage__values">
        <div className="nt-aboutPage__container">
          <div className="nt-aboutPage__sectionHead">
            <div className="nt-aboutPage__kicker">What you can expect</div>
            <div className="nt-aboutPage__h2">Our Values</div>
          </div>

          <div className="nt-aboutPage__cards">
            <div className="nt-aboutPage__valueCard">
              <div className="nt-aboutPage__valueIcon" aria-hidden="true">
                <ClipboardList size={18} />
              </div>
              <div className="nt-aboutPage__valueTitle">Structured Thinking</div>
              <div className="nt-aboutPage__valueText">We simplify complexity into clear priorities and action plans.</div>
            </div>

            <div className="nt-aboutPage__valueCard">
              <div className="nt-aboutPage__valueIcon" aria-hidden="true">
                <Users2 size={18} />
              </div>
              <div className="nt-aboutPage__valueTitle">People & Process</div>
              <div className="nt-aboutPage__valueText">We build systems that your team can follow and scale.</div>
            </div>

            <div className="nt-aboutPage__valueCard">
              <div className="nt-aboutPage__valueIcon" aria-hidden="true">
                <Target size={18} />
              </div>
              <div className="nt-aboutPage__valueTitle">Accountability</div>
              <div className="nt-aboutPage__valueText">Regular reviews to ensure implementation and momentum.</div>
            </div>

            <div className="nt-aboutPage__valueCard">
              <div className="nt-aboutPage__valueIcon" aria-hidden="true">
                <TrendingUp size={18} />
              </div>
              <div className="nt-aboutPage__valueTitle">Outcome Focus</div>
              <div className="nt-aboutPage__valueText">We track progress using measurable business outcomes.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="nt-aboutPage__section nt-aboutPage__process">
        <div className="nt-aboutPage__container">
          <div className="nt-aboutPage__sectionHead">
            <div className="nt-aboutPage__kicker">How we work</div>
            <div className="nt-aboutPage__h2">A Simple, Repeatable Process</div>
          </div>

          <div className="nt-aboutPage__steps">
            <div className="nt-aboutPage__step">
              <div className="nt-aboutPage__stepNum">1</div>
              <div>
                <div className="nt-aboutPage__stepTitle">Discovery</div>
                <div className="nt-aboutPage__stepText">Understand your goals, constraints, and current performance.</div>
              </div>
            </div>

            <div className="nt-aboutPage__step">
              <div className="nt-aboutPage__stepNum">2</div>
              <div>
                <div className="nt-aboutPage__stepTitle">Diagnosis</div>
                <div className="nt-aboutPage__stepText">Identify bottlenecks in marketing, sales, ops, and people.</div>
              </div>
            </div>

            <div className="nt-aboutPage__step">
              <div className="nt-aboutPage__stepNum">3</div>
              <div>
                <div className="nt-aboutPage__stepTitle">Plan & Systems</div>
                <div className="nt-aboutPage__stepText">Create a roadmap and build SOPs/processes to support scale.</div>
              </div>
            </div>

            <div className="nt-aboutPage__step">
              <div className="nt-aboutPage__stepNum">4</div>
              <div>
                <div className="nt-aboutPage__stepTitle">Execution & Reviews</div>
                <div className="nt-aboutPage__stepText">Weekly/bi-weekly reviews to keep teams aligned and accountable.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nt-aboutPage__section nt-aboutPage__cta">
        <div className="nt-aboutPage__container">
          <div className="nt-aboutPage__ctaCard">
            <div className="nt-aboutPage__ctaLeft">
              <div className="nt-aboutPage__ctaTitle">Ready to build structured growth?</div>
              <div className="nt-aboutPage__ctaText">
                Book a consultation and we’ll map out the next steps for your business.
              </div>
            </div>
            <Link className="nt-aboutPage__ctaBtn" to="/book">
              Book a Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
