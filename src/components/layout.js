import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGitlab,
  faGithub,
  faNpm,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import '../css/styles.css';

library.add(faGithub, faGitlab, faNpm, faLinkedin);

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full flex flex-col text-gray-900">
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
