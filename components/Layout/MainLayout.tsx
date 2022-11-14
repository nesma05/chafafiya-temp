import Footer from './Footer'
import Navbar from './Header/Navbar'

const MainLayout = ({ dir,children }: any) => {
  return (
    <div className="font-arabic" dir={dir}>
      <Navbar />
      {children}
      <Footer />
     
    </div>
  )
}

export default MainLayout
