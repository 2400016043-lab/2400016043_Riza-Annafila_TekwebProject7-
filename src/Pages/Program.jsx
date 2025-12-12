import React from 'react';
import Jadwal from '../Components/Jadwal';

const Program = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jadwal & <span className="text-blue-600">Program Kegiatan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rancang jadwal yang fleksibel dengan program-program unggulan kami.
          </p>
        </div>
        <Jadwal />
      </div>
    </section>
  );
};

export default Program;