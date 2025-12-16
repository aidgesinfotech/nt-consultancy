import Hero from '../components/Hero'
import WhoAmI from '../components/WhoAmI'
import StatsStrip from '../components/StatsStrip'
import ServicesShowcase from '../components/ServicesShowcase'
import SuccessStoriesSlider from '../components/SuccessStoriesSlider'
import BlogsSection from '../components/BlogsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Faq from './Faq'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAmI />
      <StatsStrip />
      <ServicesShowcase />
      <SuccessStoriesSlider />
      <BlogsSection />
      <TestimonialsSection />
      <Faq />
    </>
  )
}
