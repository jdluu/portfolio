import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import fractal from '../../assets/fractal.png';
import './Home.css';

const Home = () => {
  return (
    <div class = "HomeDescriptionContainer" >
      <div class = "HomeDescriptionRowContainer">
        <div class = "HomeDescriptionColumnContainer">
          <h class = "SelfDescription">I'm Jeffrey Luu, Developer and Designer.</h>
          <p class = "ParagraphDescription">Interested in mobile development, web development, and computer graphics.</p>
          <div class = "ResumeBox">
            <a class = "ResumeButton" 
               href = "https://drive.google.com/file/d/1eXwe5AGbLlQ61-fzjME4_vMcAU8m390R/view?usp=sharing" 
               target = "_blank" 
               rel = "noreferrer">
                Download Resume
            <span class = "ResumeArrow">
              <HiArrowNarrowRight size = {25} class = "hi1" />
            </span>
            </a>
          </div>
        </div>
        <div class = "ImageBox">
          <img class = "MandelbrotImg" src = {fractal} alt = "my profile" />
        </div>
      </div>
    </div>
  );
};
export default Home;