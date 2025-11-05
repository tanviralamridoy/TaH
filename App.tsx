
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gaming from './components/Gaming';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Projects />
        <Gaming />
        <Content />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
