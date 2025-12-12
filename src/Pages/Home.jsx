import React from 'react';
import HeroSection from '../Components/Herosection';
import Content from '../Components/Content';
import Jadwal from '../Components/Jadwal';
import Showcase from '../Components/Showcase';
import Testi from '../Components/Testi';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Content />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Jadwal />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Showcase />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Testi />
        </div>
      </section>
    </div>
  );
};

export default Home;