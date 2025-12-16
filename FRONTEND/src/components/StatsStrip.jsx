import './StatsStrip.css'

const STATS = [
  { value: '7.8L+', label: 'Entrepreneurs Impacted' },
  { value: '36K+', label: 'MSMEs Empowered through\nThe Business P.A.C.E\nProgram' },
  { value: '18+', label: 'Years of transforming\nMSME businesses.' },
  { value: '6,744 CR', label: 'Additional revenue\ngenerated in the last one\nyear.' },
  { value: '7+', label: 'Trained Across Countries' },
]

export default function StatsStrip() {
  return (
    <section className="nt-stats">
      <div className="nt-stats__container">
        <div className="nt-stats__panel">
          {STATS.map((s) => (
            <div key={s.value} className="nt-stats__item">
              <div className="nt-stats__value">{s.value}</div>
              <div className="nt-stats__label">
                {s.label.split('\n').map((line, i) => (
                  <span key={i} className="nt-stats__labelLine">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="nt-stats__note">
          <div className="nt-stats__noteTop">But numbers aside, here’s what really matters to me...</div>
          <div className="nt-stats__quote">“ To help MSMEs build impactful businesses and become industry leaders. ”</div>
        </div>
      </div>
    </section>
  )
}
