import React from 'react'
import Navbar from '../components/Navbar';
import "../index.css"
import Hero from '../components/Hero';
import About from '../components/About';
import Feature from '../components/Feature';
import Authors from '../components/Authors';
import { Button } from '@/components/ui/button';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Feature/>
      <About/>
      <Authors/>
      <Button/>
      <footer/>
    </>
  );
}

export default LandingPage