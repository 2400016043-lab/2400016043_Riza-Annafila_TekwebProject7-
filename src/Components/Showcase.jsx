import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Showcase = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            UI/UX Design
          </span>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Creative Portfolio Platform
          </h3>
          <p className="text-gray-600 mb-6">
            Platform showcase inovatif hasil kolaborasi dengan ruang eksperimen UI/UX yang menawan.
          </p>
          <div className="space-y-3 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <img 
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt="Student"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Budi Santoso</p>
                  <p className="text-sm text-gray-600">Mahasiswa Sistem Informasi</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/projects" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Lihat Project
          </Link>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            alt="Project showcase"
            className="rounded-lg shadow-2xl w-full"
          />
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;