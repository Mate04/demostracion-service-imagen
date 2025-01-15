import { Outlet } from "react-router";
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import Scroll from '../Components/Scroll/Scroll'
export default function Main() {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Scroll/>
        <Footer/>
    </>
  )
}
