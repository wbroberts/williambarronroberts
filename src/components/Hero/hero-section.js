import React from 'react';
import Fade from 'react-reveal/Fade';

import { BrandIcon } from '../brand-icon';

export const HeroSection = () => {
  return (
    <section className="bg-indigo-900 w-screen h-screen flex flex-col justify-center text-center">
      <Fade top delay={250}>
        <h1 className="font-display text-5xl tracking-wide font-thin text-white">
          William Roberts
        </h1>
      </Fade>

      <Fade delay={1250}>
        <div className="flex justify-center mt-3">
          <BrandIcon
            color="#e65328"
            icon="gitlab"
            link="https://gitlab.com/wbroberts"
          />
          <BrandIcon
            color="#24292e"
            icon="github"
            link="https://github.com/wbroberts"
          />
          <BrandIcon
            color="#fb3e44"
            icon="npm"
            link="https://www.npmjs.com/~wbroberts"
          />
          <BrandIcon
            color="#0077B5"
            icon="linkedin"
            link="https://www.linkedin.com/in/william-roberts-6b666259/"
          />
        </div>
      </Fade>

      <Fade bottom delay={750}>
        <h2 className="font-body text-xl tracking-wide text-white mt-5">
          Full stack developer.
        </h2>
      </Fade>
    </section>
  );
};
