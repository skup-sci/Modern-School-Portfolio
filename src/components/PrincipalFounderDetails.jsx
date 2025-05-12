import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import Card from './Card';

const people = [
  {
    name: {
      en: 'Nandini Pandey',
      hi: 'नंदिनी पाण्डेय',
    },
    title: {
      en: 'Principal',
      hi: 'प्रिंसिपल',
    },
    imgSrc: '/images/Principal.jpg',
  },
  {
    name: {
      en: 'Manoj Singh',
      hi: 'मनोज सिंह',
    },
    title: {
      en: 'Manager',
      hi: 'प्रबंधक',
    },
    imgSrc: '/images/Founder1.jpg',
  },
  {
    name: {
      en: 'Ravikant Patel',
      hi: 'रविकांत पटेल',
    },
    title: {
      en: 'Chairman',
      hi: 'अध्यक्ष',
    },
    imgSrc: '/images/Principal1.jpg',
  },
];

const PrincipalFounderDetails = () => {
  const { lang } = useContext(LanguageContext);
  
  return (
    <div className="space-y-5 w-full">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-amber-800 pb-2 block text-center md:text-left md:inline-block">
        {lang === 'hi' ? 'विशिष्ट व्यक्ति' : 'Distinguished People'}
      </h2>
      
      <div className="space-y-4 w-full max-w-sm mx-auto md:mx-0">
        {people.map((person, index) => (
          <Card
            key={index}
            image={person.imgSrc}
            alt={person.name[lang]}
            title={person.name[lang]}
            subtitle={person.title[lang]}
          />
        ))}
      </div>
    </div>
  );
};

export default PrincipalFounderDetails;
