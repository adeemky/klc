import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Moustiquair from "./components/Moustiquair";
import Renovation from "./components/Renovation";
import Platrerie from "./components/Platrerie";
import Peinture from "./components/Peinture";
import Carrelage from "./components/Carrelage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Merci from "./pages/Merci";

function App() {
  return (
    <div className="relative min-h-screen pt-12 md:pt-0">
      <div className="absolute inset-0 -z-10 w-full min-h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merci" element={<Merci />} />
          <Route path="/services/moustiquaire" element={<Moustiquair />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/platrerie" element={<Platrerie />} />
          <Route path="/services/peinture" element={<Peinture />} />
          <Route path="/services/carrelage" element={<Carrelage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
