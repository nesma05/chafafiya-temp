import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Hero from '../components/home/Hero'
import Navbar from '../components/Layout/Header/Navbar'
import BoxSection from '../components/home/BoxSection'
import IconBoxSection from '../components/home/IconBoxSection'
import AccordionSection from '../components/home/AccordionSection'
import PresentationSection from '../components/home/PresentaionSection'
import Drawer from '../components/terms/Drawer'
import Footer from '../components/Layout/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Drawer />
      <PresentationSection />
      <BoxSection />
      <AccordionSection />
      <IconBoxSection />
      <Footer />
      </div> 
  )
}

export default Home
