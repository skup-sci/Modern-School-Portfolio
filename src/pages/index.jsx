import React from 'react';
import AnnouncementTicker from '../components/AnnouncementTicker';
import Slideshow from '../components/Slideshow';
import PrincipalFounderDetails from '../components/PrincipalFounderDetails';
import { useLanguage } from '../LanguageContext.jsx';
import Container from '../components/Container';

const Home = () => {
  const { lang, langContent } = useLanguage();
  const content = langContent[lang] || langContent['en'];

  return (
    <Container>
      <div className="overflow-x-hidden">
        {/* Hero section with logos and college name */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-12 mb-4 sm:mb-8">
          <header className="flex flex-col sm:flex-row items-center sm:justify-between bg-white rounded shadow p-3 sm:p-5">
            <div className="w-full sm:w-1/6 flex justify-center items-center mb-3 sm:mb-0">
              <img
                src="/images/Logo_Left.jpg"
                alt="Logo Left"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </div>
            <div className="text-center w-full sm:w-4/6 order-first sm:order-none mb-3 sm:mb-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {content.schoolName}
              </h1>
              <div className="relative h-px bg-gradient-to-r from-transparent via-amber-800 to-transparent w-3/4 mx-auto mt-2">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <div className="w-2 h-2 bg-amber-800 rounded-full transform rotate-45 absolute"></div>
                  <div className="w-2 h-2 bg-amber-800 rounded-full transform -rotate-45 absolute"></div>
                </div>
              </div>
              <p className="text-sm mt-3">
                {lang === 'hi'
                  ? 'पचमा, जमुई पंडित, महराजगंज, उत्तर प्रदेश'
                  : 'Pachma, Jamui Pandit, Maharajganj, Uttar Pradesh'}
              </p>
              <p className="text-xs mt-1 text-gray-600">
                {lang === 'hi'
                  ? 'उत्तर प्रदेश सरकार द्वारा मान्यता प्राप्त'
                  : 'Recognized by U.P. Government'}
              </p>
            </div>
            <div className="w-full sm:w-1/6 flex justify-center items-center mb-3 sm:mb-0">
              <img
                src="/images/Logo_Right.jpg"
                alt="Logo Right"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </div>
          </header>
        </div>

        {/* Main content with slideshow and principal/founder details */}
        <main>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:w-2/3">
                <Slideshow />
                <div className="mt-6 md:mt-8">
                  <h2 className="text-xl font-bold mb-4 border-b-2 border-amber-800 pb-2 inline-block">
                    {lang === 'hi' ? 'स्वागत है' : 'Welcome'}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {content.aboutContent}
                  </p>
                </div>
              </div>
              <aside className="w-full md:w-1/3 md:pl-4 flex flex-col items-center md:items-start mt-6 md:mt-0">
                <PrincipalFounderDetails />
              </aside>
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Home;
