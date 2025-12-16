const TOPICS = [
  'How to Grow a Small Business in 2025',
  'Importance of HR Systems',
  'Why Marketing Fails in Small Businesses',
  'Benefits of Business Astrology in Decision-Making',
]

export default function Blog() {
  return (
    <div className="nt-container">
      <h1 className="nt-pageTitle">Blog / Articles</h1>
      <p className="nt-bodyText">Articles will be added gradually. Sample topics:</p>
      <ul className="nt-list">
        {TOPICS.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
