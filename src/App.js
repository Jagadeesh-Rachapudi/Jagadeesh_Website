import Nav from "./Components/Nav/Nav";
import Hedder from "./Components/Hedder/Hedder";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experiance from "./Components/Experiance/Experiance";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Hedder />
      <Nav />
      <About />
      <Experiance />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
