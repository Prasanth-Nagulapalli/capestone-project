import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import Highlights from "./components/highlights/Highlights";
import About from './components/About/About'
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
