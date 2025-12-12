import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Text Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
              RUANG EKSPRESI :{" "}
              <span className="text-blue-600">
                Wadah kreatif & Kompetitif Mahasiswa
              </span>
            </h1>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-4 py-2 bg-yellow-200 rounded-full text-sm font-medium">
                Kreatif
              </span>
              <span className="px-4 py-2 bg-green-200 rounded-full text-sm font-medium">
                Inovatif
              </span>
              <span className="px-4 py-2 bg-blue-200 rounded-full text-sm font-medium">
                Collaboration
              </span>
              <span className="px-4 py-2 bg-red-200 rounded-full text-sm font-medium">
                Guidance & Support
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-white rounded-lg p-4 md:p-6 flex justify-center md:justify-end items-center">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Students collaborating"
              loading="lazy"
              className="rounded-lg w-64 md:w-80 h-40 md:h-64 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
