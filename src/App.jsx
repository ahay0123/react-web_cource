import { Routes, Route } from "react-router"

import FooterComponent from "./component/FooterComponent";
import NavbarComponent from "./component/NavbarComponent";

import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import TestimonalPage from "./pages/TestimonalPage";


function App() {
  return(
  <>
    <NavbarComponent/>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonalPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetentuanPage} />
      </Routes>

    <FooterComponent/>
  </>
  )
}

export default App