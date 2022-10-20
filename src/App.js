import Nav from "./Components/Nav/Nav";
import Hedder from "./Components/Hedder/Hedder";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Experiance from "./Components/Experiance/Experiance";
import Footers from "./Components/Footers/Footers";
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
      <Contacts />
      <Footers />
    </>
  );
}

export default App;
