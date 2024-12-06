import React from 'react';
import { Calendar } from 'lucide-react';

interface ScheduleItemProps {
  level: string;
  instructor: string;
  time: string;
  days: string;
}

function ScheduleItem({ level, instructor, time, days }: ScheduleItemProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-red-500">{level}</h4>
          <p className="text-gray-600">Instructor: {instructor}</p>
        </div>
        <div className="text-right">
          <p className="text-red-500 font-semibold">{time}</p>
          <p className="text-sm text-gray-500">{days}</p>
        </div>
      </div>
    </div>
  );
}

export function Schedule() {
  const schedules = [
    { level: 'A1', instructor: 'Abdulrahman Emad', time: '6:00 PM - 8:00 PM', days: 'Sun, Tue, Thu' },
    { level: 'A1', instructor: 'Adham Hammam', time: '4:00 PM - 6:00 PM', days: 'Sat, Mon, Wed' },
    { level: 'A2', instructor: 'Abdulrahman Emad', time: '8:00 PM - 10:00 PM', days: 'Sun, Tue, Thu' },
    { level: 'A2', instructor: 'Adham Hammam', time: '6:00 PM - 8:00 PM', days: 'Sat, Mon, Wed' },
  ];

  return (
    <section id="schedule" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Calendar className="text-red-500" size={24} />
          <h2 className="text-3xl font-bold text-gray-900">Class Schedule</h2>
        </div>
        <div className="grid gap-4 max-w-4xl mx-auto">
          {schedules.map((schedule, index) => (
            <ScheduleItem key={index} {...schedule} />
          ))}
        </div>
      </div>
    </section>
  );
}