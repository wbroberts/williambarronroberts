import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Project = ({ name, isPrivate, icons = [] }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className={isPrivate ? 'text-red-900' : null}>{name}</h3>
      <div className="flex items-center">
        {icons.map((icon, index) => (
          <div className="mx-1 text-gray-800">
            <FontAwesomeIcon key={index} icon={['fab', icon]} size="lg" />
          </div>
        ))}
      </div>
    </div>
  );
};
