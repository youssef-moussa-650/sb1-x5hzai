import React from 'react';
import { Header } from './components/Header';
import { CourseCard } from './components/CourseCard';
import { InstructorCard } from './components/InstructorCard';
import { Schedule } from './components/Schedule';
import { SocialMedia } from './components/SocialMedia';

function App() {
  const courses = [
    {
      level: 'A1 Level',
      description: 'Start your German journey with basic communication skills, grammar fundamentals, and essential vocabulary.',
      duration: '3 months',
      price: '2000 EGP',
    },
    {
      level: 'A2 Level',
      description: 'Build upon your basic knowledge and learn to handle everyday situations with confidence.',
      duration: '3 months',
      price: '2500 EGP',
    },
  ];

  const instructors = [
    {
      name: 'Abdulrahman Emad',
      image: 'https://images.unsplash.com/photo-1606161290889-77950cfb67d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Experienced German language instructor specializing in beginner levels with interactive teaching methods.',
    },
    {
      name: 'Adham Hammam',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Certified German teacher focusing on conversational skills and practical language application.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] bg-red-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Learn German Online</h1>
            <p className="text-xl mb-8">Interactive Zoom sessions with professional instructors to master the German language</p>
            <a href="#courses" className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Instructors</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {instructors.map((instructor, index) => (
              <InstructorCard key={index} {...instructor} />
            ))}
          </div>
        </div>
      </section>

      <Schedule />
      <SocialMedia />
    </div>
  );
}

export default App;