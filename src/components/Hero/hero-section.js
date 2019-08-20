import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { BrandIcon } from '../brand-icon';
import './hero-section.css';

export const HeroSection = () => {
  return (
    <article className="bg-hero w-screen h-screen flex flex-col justify-center items-center text-center">
      <Fade top delay={250}>
        <h1 className="font-display text-5xl tracking-wide font-thin text-white">
          William Roberts
        </h1>
      </Fade>

      <Zoom delay={1250}>
        <div className="flex justify-center mt-3">
          <BrandIcon
            borderColor="#e65328"
            icon="gitlab"
            color="white"
            link="https://gitlab.com/wbroberts"
          />
          <BrandIcon
            borderColor="#24292e"
            icon="github"
            color="white"
            link="https://github.com/wbroberts"
          />
          <BrandIcon
            borderColor="#fb3e44"
            icon="npm"
            color="white"
            link="https://www.npmjs.com/~wbroberts"
          />
          <BrandIcon
            borderColor="#0077B5"
            icon="linkedin"
            color="white"
            link="https://www.linkedin.com/in/william-roberts-6b666259/"
          />
        </div>
      </Zoom>

      <Fade bottom delay={750}>
        <h2 className="font-body text-xl tracking-wide text-white mt-5">
          Full stack developer.
        </h2>
      </Fade>
    </article>
  );
};
