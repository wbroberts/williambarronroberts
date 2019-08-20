import React from 'react';
import { SectionContainer } from '../section-container';
import { SkillCard } from './skill-card';

export const SkillsSection = () => {
  return (
    <SectionContainer title="Skills" background="bg-gray-200">
      <div className="flex justify-around w-full mt-8">
        <SkillCard
          title="Web Technologies and Frameworks"
          listItems={[
            'Angular',
            'Node',
            'GCP',
            'Express',
            'React',
            'Vue',
            'HTML5',
            'CSS3',
            'Material',
            'Ionic',
          ]}
        />
        <SkillCard
          title="Other"
          listItems={['Git', 'CI/CD', 'NPM Publishing', 'Salesforce', '']}
        />
      </div>
    </SectionContainer>
  );
};
