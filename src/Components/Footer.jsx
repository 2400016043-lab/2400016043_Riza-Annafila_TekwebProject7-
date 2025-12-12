import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">RE</span>
              </div>
              <span className="text-xl font-bold">Ruang Ekspresi</span>
            </div>
            <p className="text-blue-200 text-sm">
              Wadah kreativitas untuk mahasiswa Indonesia yang ingin mengeksplorasi ide dan berkolaborasi.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-white">Program</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white">Projects</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white">Career Talks</a></li>
              <li><a href="#" className="hover:text-white">BNMO Course</a></li>
              <li><a href="#" className="hover:text-white">Project Track</a></li>
              <li><a href="#" className="hover:text-white">Mentoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>Email: info@ruangekspresi.com</li>
              <li>Phone: +62 812 3456 7890</li>
              <li>Instagram: @ruangekspresi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>© 2024 Ruang Ekspresi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;