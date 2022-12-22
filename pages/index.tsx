import type { NextPage } from 'next'
import Hero from '../components/home/Hero'
import BoxSection from '../components/home/BoxSection'
import IconBoxSection from '../components/home/IconBoxSection'
import AccordionSection from '../components/home/AccordionSection'
import PresentationSection from '../components/home/PresentaionSection'
import Drawer from '../components/terms/Drawer'
import CarrousselSection from '../components/home/CarrousselSection'


const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Drawer />
      {/* <PresentationSection /> */}
      <CarrousselSection/>
      <BoxSection />
      <AccordionSection />
      <IconBoxSection />
    </div>
  )
}

export default Home
