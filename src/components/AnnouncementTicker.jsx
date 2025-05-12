import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

const AnnouncementTicker = () => {
  const { lang, langContent } = useLanguage();
  const content = langContent[lang] || langContent['en'];
  
  // Get announcements from language content
  const announcements = [
    content.announcementAdmission,
    content.announcementExam,
    content.announcementEvent
  ];

  return (
    <div className="bg-orange-500 text-white whitespace-nowrap overflow-hidden">
      <div className="marquee py-1 px-4">
        <div className="animate-marquee inline-block">
          {announcements.map((announcement, index) => (
            <span key={index} className="inline-block mx-4">• {announcement}</span>
          ))}
        </div>
      </div>
      <style>
        {`
        .marquee {
          width: 100%;
          overflow: hidden;
        }
        
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        `}
      </style>
    </div>
  );
};

export default AnnouncementTicker; 