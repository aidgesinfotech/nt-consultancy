import './WhoAmI.css'

export default function WhoAmI() {
  return (
    <section className="nt-who">
      <div className="nt-who__top">
        <div className="nt-who__topInner">
          <h2 className="nt-who__topTitle">WHO AM I, REALLY?</h2>
          <div className="nt-who__pill">India&apos;s MSME Business Coach</div>
        </div>
      </div>

      <div className="nt-who__body">
        <div className="nt-who__container">
          <div className="nt-who__left">
            <p className="nt-who__p">
              For the past 18 years, I’ve been on a mission to help MSME business owners break free from firefighting and
              build a growth business. I don’t just teach theory. I bring real & tested strategies that have worked for
              thousands of entrepreneurs across industries and for myself.
            </p>
            <p className="nt-who__p">
              With a team of 70+ in-house business coaches, we’ve worked with businesses across 196+ industries and helped
              MSMEs scale faster with expert-led business coaching, proven frameworks, and handholding.
            </p>
          </div>

          <div className="nt-who__right">
            <img className="nt-who__ellipse nt-who__ellipse--lg" src="/media/Ellipse.svg" alt="" aria-hidden="true" />
            <img className="nt-who__ellipse nt-who__ellipse--sm" src="/media/Ellipse-sm.svg" alt="" aria-hidden="true" />

            <div className="nt-who__photoWrap">
                <img className="nt-who__photo" src="/media/about-side-img.webp" alt="Consultant" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
