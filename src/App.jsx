import Navbar from "./Components/HomeComponents/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Hero from "./Components/HomeComponents/Hero.jsx";

function App() {

  return (
    <div className={"font-Poppins bg-[#1D2B53]"}>
        <Navbar/>
        <Outlet/>
        <Hero/>
    </div>
  )
}

export default App
