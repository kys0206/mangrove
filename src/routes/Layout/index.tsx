import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      {/* <div className="bg-white text-black"> */}
      <NavigationBar />
      <Outlet />
      <Footer />
      {/* </div> */}
    </>
  )
}
