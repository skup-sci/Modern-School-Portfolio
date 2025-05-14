import React, { useState, useEffect } from 'react';
import AnnouncementTicker from '../components/AnnouncementTicker.jsx';
import Slideshow from '../components/Slideshow.jsx';
import PrincipalFounderDetails from '../components/PrincipalFounderDetails.jsx';
import SchoolFacilities from '../components/SchoolFacilitiesNew.jsx';
import Testimonials from '../components/Testimonials.jsx';
import { useLanguage } from '../LanguageContext.jsx';
import Container from '../components/Container.jsx';
import NoticeCard from '../components/NoticeCard.jsx';
import { getNotices } from '../services/noticeService.js';

/**
 * Home page of the school website.
 * Displays the hero section with logos, school name, and location,
 * as well as the announcement ticker, slideshow, and principal/founder details.
 * All content is wrapped in the Container component for a clean, centered layout.
 */
const Home = () => {
  const { lang, langContent } = useLanguage();
  const content = langContent[lang] || langContent['en'];
  const [recentNotices, setRecentNotices] = useState([]);
  const [loadingNotices, setLoadingNotices] = useState(true);

  useEffect(() => {
    const fetchRecentNotices = async () => {
      try {
        setLoadingNotices(true);
        const noticesData = await getNotices({ 
          limitCount: 3, 
          activeOnly: true 
        });
        setRecentNotices(noticesData);
      } catch (error) {
        console.error("Error fetching notices for homepage:", error);
      } finally {
        setLoadingNotices(false);
      }
    };

    fetchRecentNotices();
  }, []);

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
                
                {/* Principal's Message */}
                <div className="mt-8 bg-indigo-50 rounded-lg p-5 shadow-sm">
                  <h2 className="text-xl font-bold mb-4 border-b-2 border-amber-800 pb-2 inline-block">
                    {lang === 'hi' ? 'प्रिंसिपल का संदेश' : "Principal's Message"}
                  </h2>
                  <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="/images/Principal.jpg" 
                        alt="Principal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-indigo-900">
                        {lang === 'hi' ? 'नंदिनी पाण्डेय' : 'Nandini Pandey'}
                      </h3>
                      <p className="text-sm text-indigo-800 mb-3">
                        {lang === 'hi' ? 'प्रिंसिपल' : 'Principal'}
                      </p>                      <p className="text-gray-700 leading-relaxed">
                        {lang === 'hi' 
                          ? 'शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज में आपका स्वागत है। हमारा लक्ष्य छात्राओं को उच्च गुणवत्ता की शिक्षा प्रदान करना और उन्हें सफल, आत्मनिर्भर और समाज के लिए उपयोगी नागरिक बनाना है। हम न केवल शैक्षिक उत्कृष्टता पर बल देते हैं, बल्कि सांस्कृतिक और नैतिक मूल्यों के विकास पर भी ध्यान केंद्रित करते हैं।'
                          : 'Welcome to Shahid Pandit Ram Prasad Bismil Smarak Balika Inter College. Our goal is to provide high-quality education to our students and make them successful, self-reliant, and useful citizens for society. We focus not only on academic excellence but also on the development of cultural and moral values.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* News and Events Section */}
                <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-5 shadow-sm">
                  <h2 className="text-xl font-bold mb-4 border-b-2 border-amber-800 pb-2 inline-block">
                    {lang === 'hi' ? 'समाचार और कार्यक्रम' : "News & Events"}
                  </h2>
                  <div className="space-y-4">
                    {/* Event 1 */}
                    <div className="bg-white rounded-md p-3 shadow-sm border-l-4 border-amber-600">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-indigo-900">
                          {lang === 'hi' ? 'वार्षिक खेल दिवस' : 'Annual Sports Day'}
                        </h3>
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                          {lang === 'hi' ? '25 मई, 2025' : 'May 25, 2025'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {lang === 'hi' ? 'स्कूल के खेल मैदान में सुबह 9 बजे से शाम 4 बजे तक' : 'From 9 AM to 4 PM at the school playground'}
                      </p>
                    </div>
                    
                    {/* Event 2 */}
                    <div className="bg-white rounded-md p-3 shadow-sm border-l-4 border-indigo-600">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-indigo-900">
                          {lang === 'hi' ? 'विज्ञान प्रदर्शनी' : 'Science Exhibition'}
                        </h3>
                        <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                          {lang === 'hi' ? '10 जून, 2025' : 'June 10, 2025'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {lang === 'hi' ? 'कक्षा 6 से 12 के छात्रों के लिए। पंजीकरण 1 जून तक खुला है।' : 'For students from grades 6 to 12. Registration open until June 1.'}
                      </p>
                    </div>
                    
                    {/* Event 3 */}
                    <div className="bg-white rounded-md p-3 shadow-sm border-l-4 border-green-600">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-indigo-900">
                          {lang === 'hi' ? 'अभिभावक-शिक्षक बैठक' : 'Parent-Teacher Meeting'}
                        </h3>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {lang === 'hi' ? '15 जुलाई, 2025' : 'July 15, 2025'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {lang === 'hi' ? 'दोपहर 1 बजे से शाम 5 बजे तक सभी कक्षाओं के लिए' : 'From 1 PM to 5 PM for all classes'}
                      </p>
                    </div>
                    
                    <div className="text-center pt-2">
                      <button className="text-sm text-indigo-700 hover:text-indigo-900 font-medium border border-indigo-300 hover:border-indigo-500 rounded-full px-4 py-1 transition-colors duration-300 flex items-center mx-auto">
                        {lang === 'hi' ? 'सभी कार्यक्रम देखें' : 'View All Events'} 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>                </div>
              <aside className="w-full md:w-1/3 md:pl-4 flex flex-col items-center md:items-start mt-6 md:mt-0">
                <PrincipalFounderDetails />
                
                {/* Quick Stats Section */}
                <div className="mt-8 w-full bg-white rounded-lg shadow-sm p-5 border border-indigo-100">
                  <h2 className="text-xl font-bold mb-4 border-b-2 border-amber-800 pb-2 inline-block">
                    {lang === 'hi' ? 'स्कूल के आंकड़े' : 'School Stats'}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Students Count */}
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {lang === 'hi' ? 'छात्र संख्या' : 'Students'}
                        </p>
                        <p className="font-bold text-lg text-indigo-900">850+</p>
                      </div>
                    </div>
                    
                    {/* Teachers Count */}
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 flex items-center">
                      <div className="bg-emerald-100 p-2 rounded-full mr-3">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 14l9-5-9-5-9 5-9 5z"></path>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {lang === 'hi' ? 'शिक्षक' : 'Teachers'}
                        </p>
                        <p className="font-bold text-lg text-emerald-900">30+</p>
                      </div>
                    </div>
                    
                    {/* Established Year */}
                    <div className="p-3 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center">
                      <div className="bg-amber-100 p-2 rounded-full mr-3">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {lang === 'hi' ? 'स्थापित' : 'Established'}
                        </p>
                        <p className="font-bold text-lg text-amber-900">1995</p>
                      </div>
                    </div>
                    
                    {/* Classes Offered */}
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-50 to-fuchsia-50 flex items-center">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {lang === 'hi' ? 'कक्षाएं' : 'Classes'}
                        </p>
                        <p className="font-bold text-lg text-purple-900">1-12</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mt-4 bg-gradient-to-r from-rose-50 to-red-50 p-3 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-rose-100 p-2 rounded-full mr-3">
                        <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                      </div>                      <div>
                        <p className="text-sm text-gray-500">
                          {lang === 'hi' ? 'उपलब्धियां' : 'Achievements'}
                        </p>
                      </div>
                    </div>
                    <ul className="ml-12 list-disc text-sm text-gray-700">
                      <li>
                        {lang === 'hi' ? '95% बोर्ड परीक्षा परिणाम' : '95% Board Exam Results'}
                      </li>
                      <li>
                        {lang === 'hi' ? 'जिला स्तरीय विज्ञान प्रतियोगिता विजेता' : 'District Level Science Competition Winners'}
                      </li>
                      <li>
                        {lang === 'hi' ? 'राज्य स्तरीय खेलकूद प्रतिभागी' : 'State Level Sports Participants'}
                      </li>
                    </ul>
                  </div>
                </div>
                  {/* Facilities Section */}
                <div className="mt-8 w-full">
                  <SchoolFacilities />
                </div>
                
                {/* Recent Notices */}
                <div className="mt-8 w-full">
                  <NoticeCard 
                    notices={recentNotices}
                    previewCount={3}
                    onSeeAll={true}
                    isLoading={loadingNotices}
                  />
                </div>
              </aside>
            </div>
            
            {/* Testimonials Section */}
            <Testimonials />
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Home;
