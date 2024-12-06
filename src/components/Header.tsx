import React from 'react';
import { Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-red-500 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 size={32} />
          <h1 className="text-2xl font-bold">Deutsch Lernen</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#courses" className="hover:text-red-100">Courses</a></li>
            <li><a href="#instructors" className="hover:text-red-100">Instructors</a></li>
            <li><a href="#schedule" className="hover:text-red-100">Schedule</a></li>
            <li><a href="#contact" className="hover:text-red-100">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}