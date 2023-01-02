import React from 'react';
import './Work.css';

import code from '../../assets/code.png';
import ub from '../../assets/ub.png';

const Works = () => {
  return (
  <div class = "WorkContainer">
      <div class = "WorkContainer2">
          <div class = "WorkContainerHeading">
              <p class = "WorkHeading">
                  Work
              </p> 
              <p class = "WorkDescription">
                  Check out some of my most recent work!
              </p>
          </div>
          <div class = "GridContainer">
              <div class = "BackgroundContainer" style={{ backgroundImage: `url(${code})` }}>
                  <div class = "ProjectContainer">
                      <span class = "ProjectTitle">
                        ZooSeeker
                      </span>
                      <p class = "HoverDescription">
                        An Android application for planning a trip to the San Diego Zoo, made with Java.
                      </p>
                      <div class = "Link Container">
                          <a href = '/'>
                              <button class = "LearnMoreButton">
                                Learn More
                              </button>
                          </a>
                      </div>
                  </div>
                </div>
                <div class = "BackgroundContainer" style={{ backgroundImage: `url(${code})` }}>
                  <div class = "ProjectContainer">
                      <span class = "ProjectTitle">
                        Learning from Health
                      </span>
                      <p class = "HoverDescription">
                        A Data Science project that develops a model to predict income based on health statistics, made with Python
                      </p>
                      <div class = "Link Container">
                          <a href = '/'>
                              <button class = "LearnMoreButton">
                                Learn More
                              </button>
                          </a>
                      </div>
                  </div>
                </div>
                <div class = "BackgroundContainer" style={{ backgroundImage: `url(${ub})` }}>
                  <div class = "ProjectContainer">
                      <span class = "ProjectTitle">
                        UrBenefit
                      </span>
                      <p class = "HoverDescription">
                        A Proof of Concept centralized hub for community events.
                      </p>
                      <div class = "Link Container">
                          <a href = 'https://sites.google.com/ucsd.edu/urbenefit/home?authuser=0'>
                              <button class = "LearnMoreButton">
                                Learn More
                              </button>
                          </a>
                      </div>
                  </div>
                </div>
                <div class = "BackgroundContainer" style={{ backgroundImage: `url(${code})` }}>
                  <div class = "ProjectContainer">
                      <span class = "ProjectTitle">
                        SimpleTweet
                      </span>
                      <p class = "HoverDescription">
                        An Android application for a simple Twitter client, made with Java using Twitter API.
                      </p>
                      <div class = "Link Container">
                          <a href = '/'>
                              <button class = "LearnMoreButton">
                                Learn More
                              </button>
                          </a>
                      </div>
                  </div>
                </div>
                <div class = "BackgroundContainer" style={{ backgroundImage: `url(${code})` }}>
                  <div class = "ProjectContainer">
                      <span class = "ProjectTitle">
                        BlackJack
                      </span>
                      <p class = "HoverDescription">
                        A web implementation of BlackJack, made with HTML and CSS.
                      </p>
                      <div class = "Link Container">
                          <a href = '/'>
                              <button class = "LearnMoreButton">
                                Learn More
                              </button>
                          </a>
                      </div>
                  </div>
                </div>
                <div class = "BackgroundContainer" style={{ backgroundImage: `url(${code})` }}>
                  <div class = "ProjectContainer">
                      <span class = "ProjectTitle">
                        ShadowMapping
                      </span>
                      <p class = "HoverDescription">
                        An implementation of shadow mapping in C++, using OpenGL.
                      </p>
                      <div class = "Link Container">
                          <a href = '/'>
                              <button class = "LearnMoreButton">
                                Learn More
                              </button>
                          </a>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Works;