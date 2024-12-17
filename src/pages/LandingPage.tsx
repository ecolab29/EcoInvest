import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Features } from '../components/sections/Features';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Demo } from '../components/sections/Demo';
import { CallToAction } from '../components/sections/CallToAction';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Demo />
      <CallToAction />
      <Footer />
    </main>
  );
}