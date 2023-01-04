import React, { useState, useContext } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import {
  IoNewspaperOutline,
} from 'react-icons/io5';
import { BsSun, BsMoon} from 'react-icons/bs';
import { Link } from 'react-scroll';
import { ThemeContext } from '../../Theme';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div class = "div1">
      <div class = "div2">
        <h1 class = "h1">Jeffrey Luu</h1>
      </div>
      {/* Top navigation bar menu */}
      <ul class = "ul1">
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li class = "liButton">
          <button onClick = {toggleTheme} >
              {theme === 'dark-theme' ? <BsSun /> : <BsMoon />}
          </button>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div onClick={handleClick} class = 'hMenu'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul class = "ulMobile"> 
        <li class = "liMobile">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li class = "liMobile">
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li class = "liMobile">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li class = "liButtonMobile">
          <button onClick = {toggleTheme} >
              {theme === 'dark-theme' ? <BsSun /> : <BsMoon />}
          </button>
        </li>
      </ul>
      {/* Social icons */}
      <div class = "div3">
        <ul class = "ul2">
          <li class = "li2">
          <a
              class = "MenuContent"
              href='https://www.linkedin.com/in/jeffrey-luu/'
              target = '_blank'
              rel = 'noreferrer'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li class = "li3">
          <a
              class = 'MenuContent'
              href='https://github.com/jdluu'
              target = '_blank'
              rel = 'noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li class = "li4">
          <a
              class = 'MenuContent'
              href='https://drive.google.com/file/d/1eXwe5AGbLlQ61-fzjME4_vMcAU8m390R/view?usp=sharing'
              target = '_blank'
              rel = 'noreferrer'
            >
              Resume <IoNewspaperOutline size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;