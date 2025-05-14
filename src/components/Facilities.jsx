import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Facilities = () => {
  const { lang } = useLanguage();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  // List of facilities with icons and bilingual names
  const facilityList = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      name: {
        en: 'Library',
        hi: 'पुस्तकालय'
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      name: {
        en: 'Science Labs',
        hi: 'विज्ञान प्रयोगशाला'
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      name: {
        en: 'Computer Lab',
        hi: 'कंप्यूटर लैब'
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      name: {
        en: 'Playground',
        hi: 'खेल मैदान'
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
        </svg>
      ),
      name: {
        en: 'Music Room',
        hi: 'संगीत कक्ष'
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
        </svg>
      ),
      name: {
        en: 'Smart Classrooms',
        hi: 'स्मार्ट क्लासरूम'
      }
    },
  ];
  
  return (    <div className="w-full bg-white rounded-lg shadow-md p-5 border border-amber-100 mt-8" data-aos="fade-up">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-amber-700 pb-2 relative">
          {lang === 'hi' ? 'सुविधाएँ' : 'Facilities'}
          <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-amber-500"></div>
        </h2>
      </div>
        <div className="grid grid-cols-2 gap-3">
        {facilityList.map((facility, index) => (
          <div 
            key={index} 
            className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm hover:bg-amber-50 hover:shadow-md transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-amber-600 mr-3">
              {facility.icon}
            </div>
            <span className="text-sm font-medium">
              {lang === 'hi' ? facility.name.hi : facility.name.en}
            </span>
          </div>
        ))}
      </div>
        <div className="mt-3 pt-2">
        <a href="/facilities" className="text-sm text-center text-indigo-700 hover:text-indigo-900 font-medium border border-indigo-300 hover:border-indigo-500 rounded-full px-4 py-1 transition-colors duration-300 flex items-center justify-center">
          {lang === 'hi' ? 'अधिक जानें' : 'Learn More'}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Facilities;
