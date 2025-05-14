import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Enhanced SchoolFacilities component that displays school facilities
 * with more detailed information and improved UI
 */
const SchoolFacilitiesNew = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  const [expandedFacility, setExpandedFacility] = useState(null);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  // List of facilities with icons, bilingual names, and details
  const facilityList = [
    {
      id: "library",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      name: {
        en: 'Library',
        hi: 'पुस्तकालय'
      },
      description: {
        en: 'A well-equipped library with over 10,000 books, journals, and digital resources.',
        hi: '10,000 से अधिक किताबों, पत्रिकाओं और डिजिटल संसाधनों से सुसज्जित एक पुस्तकालय।'
      },
      highlights: [
        {
          en: 'Digital cataloging system',
          hi: 'डिजिटल कैटलॉगिंग सिस्टम'
        },
        {
          en: 'Quiet reading spaces',
          hi: 'शांत पठन स्थान'
        },
        {
          en: 'Online resources access',
          hi: 'ऑनलाइन संसाधनों तक पहुंच'
        }
      ]
    },
    {
      id: "science-labs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      name: {
        en: 'Science Labs',
        hi: 'विज्ञान प्रयोगशाला'
      },
      description: {
        en: 'State-of-the-art laboratories for Physics, Chemistry and Biology with modern equipment.',
        hi: 'भौतिकी, रसायन विज्ञान और जीव विज्ञान के लिए आधुनिक उपकरणों से सुसज्जित अत्याधुनिक प्रयोगशालाएं।'
      },
      highlights: [
        {
          en: 'Modern lab equipment',
          hi: 'आधुनिक प्रयोगशाला उपकरण'
        },
        {
          en: 'Safety protocols',
          hi: 'सुरक्षा प्रोटोकॉल'
        },
        {
          en: 'Experimental kits',
          hi: 'प्रयोगात्मक किट'
        }
      ]
    },
    {
      id: "computer-lab",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      name: {
        en: 'Computer Lab',
        hi: 'कंप्यूटर लैब'
      },
      description: {
        en: 'Modern computer lab with latest hardware and software to train students in digital literacy.',
        hi: 'छात्रों को डिजिटल साक्षरता में प्रशिक्षित करने के लिए नवीनतम हार्डवेयर और सॉफ्टवेयर वाली आधुनिक कंप्यूटर लैब।'
      },
      highlights: [
        {
          en: '50+ computer stations',
          hi: '50+ कंप्यूटर स्टेशन'
        },
        {
          en: 'High-speed internet',
          hi: 'हाई-स्पीड इंटरनेट'
        },
        {
          en: 'Programming courses',
          hi: 'प्रोग्रामिंग कोर्सेज'
        }
      ]
    },
    {
      id: "playground",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      name: {
        en: 'Playground',
        hi: 'खेल मैदान'
      },
      description: {
        en: 'Spacious playground for outdoor sports and physical activities to promote physical fitness.',
        hi: 'शारीरिक स्वास्थ्य को बढ़ावा देने के लिए आउटडोर खेलों और शारीरिक गतिविधियों के लिए विशाल खेल मैदान।'
      },
      highlights: [
        {
          en: 'Sports tracks',
          hi: 'खेल ट्रैक'
        },
        {
          en: 'Cricket and football fields',
          hi: 'क्रिकेट और फुटबॉल मैदान'
        },
        {
          en: 'Outdoor play equipment',
          hi: 'आउटडोर खेल उपकरण'
        }
      ]
    },
    {
      id: "music-room",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
        </svg>
      ),
      name: {
        en: 'Music Room',
        hi: 'संगीत कक्ष'
      },
      description: {
        en: 'Well-equipped music room with various instruments to foster musical talents.',
        hi: 'संगीत प्रतिभाओं को बढ़ावा देने के लिए विभिन्न वाद्य यंत्रों से सुसज्जित संगीत कक्ष।'
      },
      highlights: [
        {
          en: 'Traditional instruments',
          hi: 'पारंपरिक वाद्य यंत्र'
        },
        {
          en: 'Western instruments',
          hi: 'पाश्चात्य वाद्य यंत्र'
        },
        {
          en: 'Soundproof practice rooms',
          hi: 'ध्वनिरोधी अभ्यास कक्ष'
        }
      ]
    },
    {
      id: "smart-classrooms",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
        </svg>
      ),
      name: {
        en: 'Smart Classrooms',
        hi: 'स्मार्ट क्लासरूम'
      },
      description: {
        en: 'Interactive smart classrooms with digital teaching tools for enhanced learning experience.',
        hi: 'बेहतर शिक्षण अनुभव के लिए डिजिटल शिक्षण उपकरणों के साथ इंटरैक्टिव स्मार्ट कक्षाएं।'
      },
      highlights: [
        {
          en: 'Interactive whiteboards',
          hi: 'इंटरैक्टिव व्हाइटबोर्ड'
        },
        {
          en: 'Projectors in each room',
          hi: 'हर कमरे में प्रोजेक्टर'
        },
        {
          en: 'Digital learning resources',
          hi: 'डिजिटल शिक्षण संसाधन'
        }
      ]
    }
  ];
  
  // Handle card expansion with a more robust method
  const handleFacilityClick = (id) => {
    setExpandedFacility(prevId => (prevId === id ? null : id));
  };
    
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-amber-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-700 pb-2 relative">
          {isHindi ? 'हमारी प्रमुख सुविधाएँ' : 'Our Key Facilities'}
          <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-amber-500"></div>
        </h2>
        <a href="/facilities" className="text-sm text-amber-600 hover:text-amber-800 font-medium flex items-center transition-colors duration-300 whitespace-nowrap">
          {isHindi ? 'सभी सुविधाएँ देखें' : 'View All Facilities'}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {facilityList.slice(0, 6).map((facility, index) => (
          <button 
            key={facility.id}
            className={`relative border rounded-lg transition-all duration-300 text-left w-full ${
              expandedFacility === facility.id 
                ? 'bg-amber-50 border-amber-300 shadow-md' 
                : 'bg-white border-gray-200 hover:bg-amber-50 hover:border-amber-200'
            }`}
            onClick={() => handleFacilityClick(facility.id)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="p-3 flex flex-col items-center text-center">
              <div className={`p-2 rounded-full mb-2 ${
                expandedFacility === facility.id ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-700'
              }`}>
                {facility.icon}
              </div>
              <h3 className="font-semibold text-sm">
                {isHindi ? facility.name.hi : facility.name.en}
              </h3>
              
              <div 
                className={`mt-3 pt-3 border-t border-amber-200 w-full transition-all duration-500 ${
                  expandedFacility === facility.id 
                    ? 'max-h-96 opacity-100 visible' 
                    : 'max-h-0 opacity-0 invisible border-none'
                }`}
              >
                <p className="text-gray-700 mb-2 text-xs">
                  {isHindi ? facility.description.hi : facility.description.en}
                </p>
                
                <h4 className="font-semibold text-amber-700 mb-1 text-xs">
                  {isHindi ? 'विशेषताएं:' : 'Features:'}
                </h4>
                
                <ul className="space-y-1 text-left">
                  {facility.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-xs">
                      <svg className="w-3 h-3 mr-1 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{isHindi ? highlight.hi : highlight.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SchoolFacilitiesNew;
