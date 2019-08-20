import React from 'react';

import { SectionContainer } from '../section-container';
import { Project } from './project';

export const ProjectsSection = () => {
  return (
    <SectionContainer title="Projects">
      <Project
        name="Meraki Pipeline App"
        isPrivate={true}
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
      <div className="mt-6">
        Meraki Pipeline App
        <p>Private</p>
        <p>
          Ionic, Angular, Typescript, ngrx, rxjs, Firebase, GCP, Salesforce,
          NoSQL, SOQL, Gitlab CI/CD, Moment
        </p>
      </div>

      <div className="mt-6">
        Meraki Training App
        <p>Private</p>
        <p>
          Angular, Typescript, rxjs, Firebase, GCP, Salesforce, NoSQL, SOQL,
          Netlify, Tailwindcss, Material, Cloudinary
        </p>
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
          Purgecss, and autprefixer installed and ready to go.
        </p>
      </div>

      <div className="mt-6">
        Snake
        <p>Why - For fun!</p>
        <p>Typescript, HTML5, Canvas, CSS3, Netlify</p>
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
