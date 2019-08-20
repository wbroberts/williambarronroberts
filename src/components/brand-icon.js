import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './brand-icon.css';

export const BrandIcon = ({
  icon,
  link,
  size = '2x',
  color = 'white',
  borderColor = 'white',
}) => {
  return (
    <a
      href={link}
      target="__blank"
      className="icon-container relative flex justify-center items-center cursor-pointer w-10 h-10 m-2 mx-4 border-"
    >
      <div
        className="icon-bg absolute border-dashed border-b-2 border-t-2 w-12 h-12 rounded-full"
        style={{
          borderColor: borderColor,
        }}
      ></div>
      <FontAwesomeIcon
        className={`animate z-10 text-${color} opacity-50`}
        icon={['fab', icon]}
        size={size}
      />
    </a>
  );
};
