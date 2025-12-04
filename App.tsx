import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import SocialProof from './components/SocialProof';
import Leadership from './components/Leadership';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-brand-dark bg-white">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <SocialProof />
        <Leadership />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;