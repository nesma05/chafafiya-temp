import type { NextPage } from 'next'
import Hero from '../components/home/Hero'
import BoxSection from '../components/home/BoxSection'
import IconBoxSection from '../components/home/IconBoxSection'
import AccordionSection from '../components/home/AccordionSection'
import PresentationSection from '../components/home/PresentaionSection'
import Drawer from '../components/terms/Drawer'


const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Drawer />
      <PresentationSection />
      <BoxSection />
      <AccordionSection />
      <IconBoxSection />
    </div>
  )
}

export default Home
