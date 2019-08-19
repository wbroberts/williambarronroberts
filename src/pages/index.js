import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { HeroSection } from '../components/Hero/hero-section';
import { ProjectsSection } from '../components/Projects/projects-section';
import { SkillsSection } from '../components/Skills/skills-section';
import { AboutSection } from '../components/About/about-section';
import { ContactSection } from '../components/Contact/contact-section';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
