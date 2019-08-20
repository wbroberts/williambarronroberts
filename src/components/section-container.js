import React from 'react';

export const SectionContainer = ({ background, title, children }) => (
  <div className={'w-full ' + background}>
    <article className="py-16 text-center">
      <h2 className="font-display text-3xl font-thin">{title}</h2>
      <div className="mt-6">{children} </div>
    </article>
  </div>
);
