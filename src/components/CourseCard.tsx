import React from 'react';
import { BookOpen } from 'lucide-react';

interface CourseCardProps {
  level: string;
  description: string;
  duration: string;
  price: string;
}

export function CourseCard({ level, description, duration, price }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center space-x-2 mb-4">
        <BookOpen className="text-red-500" />
        <h3 className="text-xl font-bold text-red-500">{level}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="border-t pt-4">
        <p className="text-sm text-gray-500">Duration: {duration}</p>
        <p className="text-lg font-semibold text-red-500 mt-2">{price}</p>
      </div>
      <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
        Book Now
      </button>
    </div>
  );
}