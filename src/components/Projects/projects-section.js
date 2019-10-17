import React from 'react';

import { SectionContainer } from '../section-container';
import { Project } from './project';

export const ProjectsSection = () => {
  return (
    <SectionContainer title="Projects">
      <div className="max-w-4xl m-auto flex justify-around">
        <Project
          name="Meraki Pipeline App"
          isPrivate={true}
          why="Client wanted sales reps to have easy access to their customer data without signing into Salesforce"
          about="Full Stack Developer"
          icons={[
            'angular',
            'node-js',
            'js-square',
            'salesforce',
            'gitlab',
            'git',
            'html5',
            'css3',
          ]}
        />
        <Project
          name="Meraki Training App"
          isPrivate={true}
          about="Project Lead - Frontend, Backend, Architecture"
          icons={[
            'angular',
            'node-js',
            'js-square',
            'salesforce',
            'gitlab',
            'git',
            'html5',
            'css3',
          ]}
        />
        <Project
          name="Snake"
          about="Weekend project to learn Typescript and get better at 2d Canvas games"
          icons={['typescript', 'html5', 'css3', 'babel', 'webpack']}
        />
      </div>
      <div className="mt-6">
        Moon and Crater Angular Component Library
        <p>
          Why - Create more reusable components for all Moon and Crater
          projects.
        </p>
        <p>Angular, Typescript, Tailwindcss, NPM</p>
      </div>

      <div className="mt-6">
        Angular Tailwind Starter Template
        <p>
          Why - Start a new project faster that already has Tailwindcss,
          Purgecss, and autoprefixer installed and ready to go.
        </p>
      </div>

      <div className="mt-6">
        Quadtree Data Structure
        <p>
          Why - To learn more about data structures and to help me rewrite my
          very first canvas game with performant collision detection.
        </p>
        <p>Typescript, HTML5, Canvas, CSS3, Netlify</p>
      </div>
    </SectionContainer>
  );
};
