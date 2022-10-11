import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}
export default App;