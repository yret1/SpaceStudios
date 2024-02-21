import Hero from "./Components/Hero";
import Recents from "./Components/Recents";
import About from "./Components/About";
import What from "./Components/What";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <main className="overflow-x-hidden hide-scrollbar">
      <Hero />
      <Recents />
      <About />
      <What />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
