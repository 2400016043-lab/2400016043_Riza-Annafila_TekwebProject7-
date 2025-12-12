import React from 'react';
import Testi from '../Components/Testi';

const Testimony = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni <span className="text-blue-600">Mahasiswa</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengar langsung pengalaman mahasiswa yang telah bergabung dengan Ruang Ekspresi.
          </p>
        </div>
        <Testi />
      </div>
    </section>
  );
};

export default Testimony;