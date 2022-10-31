import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Hero from '../components/home/Hero'
import Navbar from '../components/Header/Navbar'
import BoxSection from '../components/home/BoxSection'
import IconBoxSection from '../components/home/IconBoxSection'
import AccordionSection from '../components/home/AccordionSection'
import PresentationSection from '../components/home/PresentaionSection'
import Drawer from '../components/terms/Drawer'
import SubTitle from '../components/home/SubTitle'
import Footer from '../components/footer'

const Home: NextPage = ({ dir }: any) => {
 
 // const {locale,locales,asPath} = useRouter()
  return (
    <div className='font-arabic' dir={dir}>
        <Navbar />
        <Hero/>
        <Drawer/>
        <PresentationSection/>
        <BoxSection/>
        <SubTitle/>
        <AccordionSection/>
        <IconBoxSection/> 
        <Footer/>      
    </div>
  ) 
}

export default Home
