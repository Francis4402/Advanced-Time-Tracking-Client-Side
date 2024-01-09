import Navbar from "./Components/HomeComponents/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Components/HomeComponents/Footer.jsx";

function App() {

  return (
    <div className={"font-Poppins bg-cover bg-center min-h-screen"} style={{backgroundImage: 'url(/Assets/herobg.png)'}}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default App
