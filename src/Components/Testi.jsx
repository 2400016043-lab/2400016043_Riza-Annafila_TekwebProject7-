import React from 'react';

const Testi = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      text: "Kreatifitas anak dalam tim ini sangat luar biasa, saya banyak belajar hal baru semua jago di bidangnya.",
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Siti Nurhaliza",
      role: "Mahasiswa Teknik Informatika",
      text: "Program mentoring sangat membantu saya dalam mengembangkan skill dan portfolio untuk karir.",
      avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
      name: "Ahmad Fauzi",
      role: "Mahasiswa Desain Komunikasi Visual",
      text: "Ruang Ekspresi memberikan wadah yang tepat untuk berkolaborasi dan mengeksplorasi ide kreatif.",
      avatar: "https://i.pravatar.cc/100?img=3"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-700">{testimonial.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Testi;