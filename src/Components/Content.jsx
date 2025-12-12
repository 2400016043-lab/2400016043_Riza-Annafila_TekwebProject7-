import React from 'react';
import { Lightbulb, Palette, Users, HeartHandshake } from 'lucide-react';

const Content = () => {
  const pillars = [
    {
      icon: <Lightbulb size={40} />,
      title: "Ekspresif",
      description: "Mengekspresikan ide dan kreativitas mahasiswa dengan bebas untuk mewujudkan potensi mereka.",
      color: "bg-yellow-200"
    },
    {
      icon: <Palette size={40} />,
      title: "Kreatif",
      description: "Wadah kreatif di mana ide berkembang menjadi karya inovatif yang nyata.",
      color: "bg-green-200"
    },
    {
      icon: <Users size={40} />,
      title: "Collaboration",
      description: "Bekerja sama dalam tim untuk memperkaya pengalaman dan meraih tujuan bersama.",
      color: "bg-blue-200"
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Guidance & Support",
      description: "Membimbing mahasiswa dengan dukungan penuh untuk meraih kesuksesan maksimal.",
      color: "bg-pink-200"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pillars.map((pillar, index) => (
        <div 
          key={index}
          className={`${pillar.color} p-6 rounded-lg hover:shadow-lg transition-shadow duration-300`}
        >
          <div className="text-gray-700 mb-4">{pillar.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
          <p className="text-gray-700 text-sm">{pillar.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;