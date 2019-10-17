import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TypescriptIcon } from '../Icons/typescript-icon';
import { BabelIcon } from '../Icons/babel-icon';
import { WebpackIcon } from '../Icons/webpack-icon';

export const Project = ({
  name,
  children,
  about,
  isPrivate = false,
  icons = [],
}) => {
  return (
    <div className="flex items-center p-8 w-1/2">
      <div className="w-1/2"></div>
      <div className="text-left font-body">
        <h3 className="text-2xl font-display">{name}</h3>
        <p>{about}</p>
        <div className="mt-3">{children}</div>
        <div className="flex items-center mt-3">
          {icons.map((icon, index) => (
            <div className="mx-1 text-gray-800">{renderIcon(icon, index)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const renderIcon = (icon, index) => {
  const classes = ['h-5', 'w-5'];
  const fill = '#2d3748';

  switch (icon) {
    case 'typescript':
      return <TypescriptIcon key={index} classes={classes} fill={fill} />;
    case 'webpack':
      return (
        <WebpackIcon key={index} classes={classes} fill={fill} />
      );
    case 'babel':
      return <BabelIcon key={index} classes={classes} fill={fill} />;
    default:
      return <FontAwesomeIcon key={index} icon={['fab', icon]} size="lg" />;
  }
};
