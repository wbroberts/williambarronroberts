import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = () => (
  <header className="bg-green-900 p-2 antialiased">
    <div className="w-full sm:max-w-4xl sm:m-auto">
      <h1>
        <Link className="text-green-100" to="/">
          WBR
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
