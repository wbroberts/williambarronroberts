import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Fade from 'react-reveal/Fade';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full flex flex-col justify-center text-center">
      <Fade top>
        <h1 className="text-5xl tracking-wide font-semibold text-blue-900">
          William Roberts
        </h1>
      </Fade>

      <Fade bottom delay={500}>
        <h2>Full stack developer</h2>
      </Fade>
    </div>
  </Layout>
);

export default IndexPage;
