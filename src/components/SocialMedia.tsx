import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function SocialMedia() {
  return (
    <section className="bg-red-500 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">تواصل معنا</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
          <a href="#" className="flex flex-col items-center space-y-2 group">
            <div className="bg-white p-4 rounded-full text-red-500 transform transition-transform group-hover:scale-110">
              <Facebook size={32} />
            </div>
            <span>Facebook</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-2 group">
            <div className="bg-white p-4 rounded-full text-red-500 transform transition-transform group-hover:scale-110">
              <Instagram size={32} />
            </div>
            <span>Instagram</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-2 group">
            <div className="bg-white p-4 rounded-full text-red-500 transform transition-transform group-hover:scale-110">
              <Youtube size={32} />
            </div>
            <span>YouTube</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-2 group">
            <div className="bg-white p-4 rounded-full text-red-500 transform transition-transform group-hover:scale-110">
              <Twitter size={32} />
            </div>
            <span>Twitter</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-2 group">
            <div className="bg-white p-4 rounded-full text-red-500 transform transition-transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
                <path d="M7 16v8h4V16H7Z"/>
                <path d="M15 16v8h4V16h-4Z"/>
                <path d="M15 8a4 4 0 0 0-4 4v12h4V12a4 4 0 0 0-4-4Z"/>
              </svg>
            </div>
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
}