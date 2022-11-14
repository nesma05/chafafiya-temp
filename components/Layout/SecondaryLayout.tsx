import { NextPage } from 'next'
import Footer from './Footer'

export type PageWithSecondaryLayoutType = NextPage & {
  getLayout: typeof SecondaryLayout
}

const SecondaryLayout = ({ children }: any) => {
  return (
    <div dir="rtl" className="font-arabic">
      {children}
      <Footer />   
      </div>
  )
}

export default SecondaryLayout