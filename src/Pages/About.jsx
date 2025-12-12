import React from 'react';
import Content from '../Components/Content';

const About = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Komitmen kami dalam membimbing mahasiswa untuk menggapai impian dengan kreativitas dan kompetensi tinggi.
          </p>
        </div>
        <Content />
      </div>
    </section>
  );
};

export default About;