import React from 'react';
import { Calendar, Lightbulb, FileText, Code, TrendingUp } from 'lucide-react';

const Jadwal = () => {
  const schedules = [
    {
      icon: <Calendar size={32} />,
      title: "Sabtu-Jumat",
      subtitle: "08:00 - 17:00 WIB",
      description: "Sesi kerja fleksibel untuk kegiatan bersama.",
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      icon: <Calendar size={32} />,
      title: "Jumat-Sabtu",
      subtitle: "18:00 - 21:00 WIB",
      description: "Sesi khusus untuk proyek mendalam.",
      color: "bg-green-100 border-green-300"
    }
  ];

  const activities = [
    {
      icon: <Lightbulb size={32} />,
      title: "Career Talks",
      description: "Diskusi inspiratif dengan para profesional untuk membuka wawasan karir.",
      color: "bg-yellow-100"
    },
    {
      icon: <FileText size={32} />,
      title: "BNMO Course",
      description: "Kursus komprehensif untuk mengembangkan pengetahuan teknis.",
      color: "bg-green-100"
    },
    {
      icon: <Code size={32} />,
      title: "Project Track",
      description: "Mengerjakan proyek nyata yang menantang untuk menambah portofolio.",
      color: "bg-blue-100"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Mentoring",
      description: "Bimbingan personal dari mentor berpengalaman di bidangnya.",
      color: "bg-pink-100"
    }
  ];

  return (
    <div>
      <div className="mb-12">
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="text-blue-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Setiap Sabtu</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {schedules.map((schedule, index) => (
              <div 
                key={index}
                className={`${schedule.color} border-2 rounded-lg p-4 flex items-start space-x-4`}
              >
                <div className="text-gray-700">{schedule.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{schedule.title}</h4>
                  <p className="text-sm text-gray-700 font-medium">{schedule.subtitle}</p>
                  <p className="text-sm text-gray-600 mt-1">{schedule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className={`${activity.color} p-6 rounded-lg hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="text-gray-700 mb-4">{activity.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
            <p className="text-gray-700 text-sm">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jadwal;