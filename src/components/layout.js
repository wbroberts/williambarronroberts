import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGitlab,
  faGithub,
  faNpm,
  faLinkedin,
  faAngular,
  faReact,
  faNodeJs,
  faJsSquare,
  faVuejs,
  faSalesforce,
  faCss3,
  faHtml5,
  faGit,
} from '@fortawesome/free-brands-svg-icons';

import '../css/styles.css';

library.add(
  faGithub,
  faGitlab,
  faNpm,
  faLinkedin,
  faAngular,
  faReact,
  faNodeJs,
  faJsSquare,
  faVuejs,
  faSalesforce,
  faCss3,
  faHtml5,
  faGit
);

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full flex flex-col text-gray-900 antialiased">
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
