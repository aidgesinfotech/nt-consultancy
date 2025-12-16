import { Link } from 'react-router-dom'

export default function Book() {
  return (
    <div className="nt-container">
      <h1 className="nt-pageTitle">Book a Consultation</h1>
      <p className="nt-bodyText">Book a 30-minute consultation to discuss your business challenges.</p>

      <div className="nt-card">
        <h2 className="nt-cardTitle">You will receive:</h2>
        <ul className="nt-list">
          <li>Clarity on your current business situation</li>
          <li>Guidance on strategy, operations, HR or marketing</li>
          <li>A practical roadmap for next steps</li>
        </ul>
        <Link className="nt-primaryBtn" to="/contact">Contact to Schedule</Link>
      </div>
    </div>
  )
}
