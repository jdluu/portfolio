import React, {useContext} from 'react';
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import { ThemeContext } from "./Theme";

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
  
  const { theme} = useContext(ThemeContext);

  return (
    <div class = {`App ${theme}`}>
      <Navbar />
      <Home />
      <Work />
      <Contact />
    </div>
  );
}
export default App;