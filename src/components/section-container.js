import React from 'react';

export const SectionContainer = ({ background, title, children }) => (
  <div className={'w-full ' + background}>
    <article className="h-40 py-16 text-center">
      <h2 className="font-display text-3xl font-thin">{title}</h2>
      {children}
    </article>
  </div>
);
