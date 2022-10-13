import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

const isMobileDevice = ({
  query: "(min-device-width: 480px)",
});

const isTabletDevice = ({
  query: "(min-device-width: 768px)",
});

const isLaptopDevice = ({
  query: "(min-device-width: 1024px)",
});

const isDesktopDevice = ({
  query: "(min-device-width: 1200px)",
});

const isBigScreenDevice = ({
  query: "(min-device-width: 1201px)",
});



function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <Works />
      <Contact />
    </div>
  );
}
export default App;