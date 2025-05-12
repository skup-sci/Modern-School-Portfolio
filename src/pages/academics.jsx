import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../LanguageContext.jsx';

const AcademicsPage = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const tabs = [
    {
      title: isHindi ? '📚 कक्षाएं' : '📚 Classes',
      content: (
        <div>
          <img src="/images/classroom.jpg" alt="Classroom" className="w-32 mb-4 rounded-md shadow-md" />
          <ul className="space-y-2 text-gray-800">
            {isHindi ? (
              <>
                <li>• <strong>नर्सरी से 8वीं तक:</strong> अंग्रेज़ी माध्यम</li>
                <li>• <strong>8वीं से हाईस्कूल:</strong> हिन्दी माध्यम</li>
              </>
            ) : (
              <>
                <li>• <strong>Nursery to 8th:</strong> English Medium</li>
                <li>• <strong>8th to High School:</strong> Hindi Medium</li>
              </>
            )}
          </ul>
        </div>
      ),
    },
    {
      title: isHindi ? '📅 सत्र 2025–26' : '📅 Session 2025–26',
      content: (
        <div>
          <img src="/images/session.jpg" alt="Session" className="w-32 mb-4" />
          <ul className="space-y-2 text-gray-800">
            {isHindi ? (
              <>
                <li>• यूपी बोर्ड और NEP आधारित NCERT पैटर्न</li>
                <li>• प्रयोगात्मक गतिविधियों पर विशेष ध्यान</li>
              </>
            ) : (
              <>
                <li>• UP Board and NEP-based NCERT pattern</li>
                <li>• Special focus on experiential activities</li>
              </>
            )}
          </ul>
        </div>
      ),
    },
    {
      title: isHindi ? '❓ अक्सर पूछे प्रश्न' : '❓ Frequently Asked Questions',
      content: (
        <div className="text-gray-800 space-y-4">
          <details className="border border-orange-300 rounded-md p-3">
            <summary className="font-semibold cursor-pointer">
              {isHindi ? 'क्या सभी कक्षाओं के लिए NCERT पैटर्न लागू है?' : 'Is the NCERT pattern applicable for all classes?'}
            </summary>
            <p className="mt-2">
              {isHindi 
                ? 'जी हाँ, पूरा पाठ्यक्रम NCERT और नई शिक्षा नीति के अनुसार है।' 
                : 'Yes, the entire curriculum follows NCERT guidelines and the New Education Policy.'}
            </p>
          </details>
          <details className="border border-orange-300 rounded-md p-3">
            <summary className="font-semibold cursor-pointer">
              {isHindi 
                ? 'क्या प्रयोगात्मक गतिविधियाँ सभी क्लासेज़ में होती हैं?' 
                : 'Are practical activities conducted in all classes?'}
            </summary>
            <p className="mt-2">
              {isHindi 
                ? 'जी हाँ, हमारी शिक्षण प्रणाली में प्रैक्टिकल लर्निंग पर विशेष ज़ोर दिया गया है।' 
                : 'Yes, our teaching methodology places special emphasis on practical learning across all grades.'}
            </p>
          </details>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-6 sm:mb-8" data-aos="fade-up">
          {isHindi ? '🏫 पाठ्यक्रम' : '🏫 Curriculum'}
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8" data-aos="fade-up">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold border transition-all duration-300 text-sm sm:text-base ${
                activeIndex === index
                  ? 'bg-orange-500 text-white border-orange-600'
                  : 'bg-white text-orange-600 border-orange-400 hover:bg-orange-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          className="bg-white shadow-md p-4 sm:p-6 rounded-xl border border-orange-200 text-left"
          data-aos="zoom-in"
          key={activeIndex} // Re-triggers animation when tab changes
        >
          {tabs[activeIndex].content}
        </div>
      </div>
    </section>
  );
};

export default AcademicsPage;
