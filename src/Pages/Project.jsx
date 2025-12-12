import React from 'react';
import Showcase from '../Components/Showcase';

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Showcase <span className="text-blue-600">Student Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat karya-karya inspiratif yang dihasilkan oleh mahasiswa dari proyek yang telah dikerjakan bersama.
          </p>
        </div>
        <Showcase />
      </div>
    </section>
  );
};

export default Projects;