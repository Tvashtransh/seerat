import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import MultiDevelopmentFraming from "./pages/MultiDevelopmentFraming";
import ResidentialFraming from "./pages/ResidentialFraming";
import TimberFraming from "./pages/TimberFraming";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import WhyUs from "./pages/WhyUs";
import Granary from "./pages/Granary";
import SummerlandLakefront from "./pages/SummerlandLakefront";
import AvanaTownhomes from "./pages/AvanaTownhomes";
import BoundaryBayBeach from "./pages/BoundaryBayBeach";
import BurnabyResidential from "./pages/BurnabyResidential";
import TroutLakeResidential from "./pages/TroutLakeResidential";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Culmena from "./pages/Culmena";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/multi-development-framing" element={<MultiDevelopmentFraming />} />
        <Route path="/residential-framing" element={<ResidentialFraming />} />
        <Route path="/timber-framing" element={<TimberFraming />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/granary" element={<Granary />} />
        <Route path="/summerland-lakefront" element={<SummerlandLakefront />} />
        <Route path="/avana-townhomes" element={<AvanaTownhomes />} />
        <Route path="/boundary-bay-beach" element={<BoundaryBayBeach />} />
        <Route path="/burnaby-residential" element={<BurnabyResidential />} />
        <Route path="/trout-lake-residential" element={<TroutLakeResidential />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/culmena" element={<Culmena />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
