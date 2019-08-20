import React from 'react';

export const SkillCard = ({ title, listItems }) => {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>

      <ul className="font-body mt-3">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
