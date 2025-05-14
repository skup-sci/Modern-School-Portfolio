// Layout component provides the main structure for the app, including navigation, content area, and (optionally) footer.
// It uses the Container component to keep content centered and readable on all screen sizes.
// Navigation items and announcements are memoized for performance.
// Handles language switching and authentication-aware navigation.
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';
import Container from './Container.jsx';
import SEO from './SEO.jsx';
import { trackPageView } from '../services/analyticsService.js';

const Layout = ({ children, title, description, schema }) => {
  const { lang, langContent, toggleLanguage } = useLanguage();
  const { isAuthenticated, logout, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Track page view when location changes
  useEffect(() => {
    const pageName = location.pathname === '/' ? 'Home' : 
      location.pathname.substring(1).charAt(0).toUpperCase() + 
      location.pathname.substring(2);
    
    trackPageView(pageName, location.pathname);
  }, [location.pathname]);
    // Memoize nav items to avoid re-creation on every render
  const navItems = useMemo(() => [
    { path: '/', key: 'home' },
    { path: '/about', key: 'about' },
    { path: '/admission', key: 'admission' },
    { path: '/academics', key: 'academics' },
    { path: '/facilities', key: 'facilities' },
    { path: '/faculty', key: 'faculty' },
    { path: '/gallery', key: 'gallery' },
    { path: '/notices', key: 'notices' },
    { path: '/contact', key: 'contact' },
  ], []);
  
  // Get content with fallback for unknown language
  const content = langContent[lang] || langContent['en'];
  
  // Memoize announcements
  const announcements = useMemo(() => [
    content.announcementAdmission,
    content.announcementExam,
    content.announcementEvent
  ], [content]);
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO 
        title={title}
        description={description}
        lang={lang}
        schema={schema}
        canonical={window.location.href}
      />
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <Container>
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="flex items-center justify-between h-14 sm:h-16">              <div className="flex items-center space-x-2 sm:space-x-4">
                <img src="/images/Logo_Left.jpg" alt="School Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
                <span className="font-bold text-sm sm:text-lg select-none truncate max-w-[150px] sm:max-w-none">शहीद पं. रा.प्र. स्मारक बालिका इंटर कॉलेज</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                    className={`nav-link focus:outline-none text-sm lg:text-base whitespace-nowrap ${
                      location.pathname === item.path
                        ? 'text-indigo-600 font-semibold'
                        : 'text-gray-700 hover:text-indigo-600'
                    }`}
                  >
                    {content[item.key]}
                  </Link>
                ))}
              </div>

              {/* Auth and Language Controls */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
                  aria-label={lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
                >
                  {lang === 'hi' ? 'EN' : 'हिं'}
                </button>
                {isAuthenticated() ? (
                  <div className="flex items-center space-x-4">
                    {user?.role === 'admin' && (
                      <Link
                        to="/admin"
                        className="text-sm text-gray-700 hover:text-indigo-600 focus:outline-none"
                      >
                        {content.admin}
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="text-sm text-gray-700 hover:text-indigo-600 focus:outline-none"
                    >
                      {content.logout}
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="text-sm text-gray-700 hover:text-indigo-600 focus:outline-none"
                  >
                    {content.login}
                  </Link>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden ml-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                    className={`block w-full text-left px-4 py-2 nav-link focus:outline-none ${
                      location.pathname === item.path
                        ? 'text-indigo-600 font-semibold'
                        : 'text-gray-700 hover:text-indigo-600'
                    }`}
                  >
                    {content[item.key]}
                  </Link>
                ))}
                <div className="px-4 py-2 border-t border-gray-200">
                  <button
                    onClick={toggleLanguage}
                    className="w-full text-left text-gray-700 hover:text-indigo-600 focus:outline-none py-1"
                  >
                    {lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
                  </button>
                  {isAuthenticated() ? (
                    <div className="mt-2">
                      {user?.role === 'admin' && (
                        <Link
                          to="/admin"
                          className="block w-full text-left text-gray-700 hover:text-indigo-600 focus:outline-none py-1"
                        >
                          {content.admin}
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left text-gray-700 hover:text-indigo-600 focus:outline-none py-1"
                      >
                        {content.logout}
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="block w-full text-left text-gray-700 hover:text-indigo-600 focus:outline-none py-1"
                    >
                      {content.login}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </Container>
      </nav>      {/* Announcement Bar (below navbar) */}
      <div className="bg-orange-500 text-white mt-12 sm:mt-14 whitespace-nowrap overflow-hidden">
        <div className="marquee py-1 px-4">
          <div className="animate-marquee inline-block">
            {announcements.map((announcement, index) => (
              <span key={index} className="inline-block mx-4 text-sm">• {announcement}</span>
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
      </div>      {/* Main content wrapper */}
      <main className="flex-1 pt-6 pb-8">
        <Container>
          {children}
        </Container>
      </main>
        {/* Footer Section */}
      <div className="mt-8">
        {/* Main Footer Content - Background extends edge-to-edge, content has padding */}
        <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white py-8 sm:py-10">
          <Container>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* School Info */}              <div className="md:w-1/3">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-3">
                    <img src="/images/Logo_Left.jpg" alt="School Logo" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज</h3>
                </div>
                <p className="text-indigo-100 mb-4 sm:mb-6 text-sm sm:text-base">
                  {content.aboutContent.substring(0, 150)}...
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-indigo-900 font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded transition-colors text-sm"
                >
                  {content.learnMore}
                  <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Quick Links */}
              <div className="md:w-1/3">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-5 relative">
                  <span className="border-b-2 border-yellow-500 pb-1">{content.quickLinks}</span>
                </h3>
                <div className="grid grid-cols-2 gap-1 sm:gap-2 text-sm sm:text-base">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="py-1 text-indigo-100 hover:text-yellow-300 transition-colors flex items-center"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {content[item.key]}
                    </Link>
                  ))}
                </div>
              </div>              {/* Contact Info */}
              <div className="md:w-1/3">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-5 relative">
                  <span className="border-b-2 border-yellow-500 pb-1">{content.contactUs}</span>
                </h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      {lang === 'hi'
                        ? 'पचमा, जमुई पंडित, महराजगंज, उत्तर प्रदेश'
                        : 'Pachma, Jamui Pandit, Maharajganj, Uttar Pradesh'}
                    </span>
                  </p>
                  <p className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@example.com</span>
                  </p>
                  <p className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 1234567890</span>
                  </p>
                </div>
                
                {/* Office Hours */}
                <div className="mt-4 pt-4 border-t border-indigo-700">
                  <h4 className="font-medium mb-2 text-yellow-300">
                    {lang === 'hi' ? 'कार्यालय समय' : 'Office Hours'}
                  </h4>
                  <div className="text-sm">
                    <p className="flex justify-between">
                      <span>{lang === 'hi' ? 'सोम - शुक्र' : 'Mon - Fri'}</span>
                      <span>8:00 AM - 3:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>{lang === 'hi' ? 'शनि' : 'Saturday'}</span>
                      <span>8:00 AM - 12:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>{lang === 'hi' ? 'रवि' : 'Sunday'}</span>
                      <span>{lang === 'hi' ? 'बंद' : 'Closed'}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="md:w-1/3 mt-6 md:mt-0">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-5 relative">
                  <span className="border-b-2 border-yellow-500 pb-1">
                    {lang === 'hi' ? 'हमसे जुड़ें' : 'Connect With Us'}
                  </span>
                </h3>
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="bg-indigo-700 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.48 10.51h-4.208v-2.739c0-1.034.703-1.275 1.198-1.275h3.037V2.775l-4.185-.019c-4.647 0-5.703 3.477-5.703 5.703v2.055H5.469v4.132h3.15V22h5.652v-7.354h3.811l.398-4.132z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-indigo-700 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868 4.66 4.66 0 001.442 6.22 4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 13.215 13.215 0 007.154 2.1c8.583 0 13.287-7.11 13.287-13.285 0-.202-.005-.404-.014-.605a9.472 9.472 0 002.323-2.42l.002-.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-indigo-700 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c-2.714 0-3.055.012-4.121.06-1.066.049-1.791.217-2.428.465a4.88 4.88 0 00-1.77 1.153A4.897 4.897 0 002.525 5.45c-.247.636-.416 1.363-.465 2.428C2.012 8.945 2 9.286 2 12s.012 3.055.06 4.121c.049 1.066.217 1.791.465 2.428a4.88 4.88 0 001.153 1.77 4.897 4.897 0 001.772 1.152c.637.247 1.362.416 2.428.465 1.066.048 1.407.06 4.121.06s3.055-.012 4.121-.06c1.066-.049 1.791-.218 2.428-.465a4.88 4.88 0 001.77-1.153 4.897 4.897 0 001.152-1.77c.247-.637.416-1.362.465-2.428.048-1.066.06-1.407.06-4.121s-.012-3.055-.06-4.121c-.049-1.066-.218-1.791-.465-2.428a4.88 4.88 0 00-1.153-1.77 4.897 4.897 0 00-1.77-1.152c-.637-.247-1.362-.416-2.428-.465C15.055 2.012 14.714 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.345.466.182.8.399 1.15.748.35.35.566.684.748 1.15.138.353.3.882.344 1.857.048 1.055.058 1.37.058 4.04 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.345 1.858a3.1 3.1 0 01-.748 1.15 3.09 3.09 0 01-1.15.748c-.353.138-.882.3-1.857.345-1.054.048-1.37.058-4.04.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.345a3.098 3.098 0 01-1.15-.748 3.09 3.09 0 01-.748-1.15c-.138-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.04 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.345-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.138.882-.3 1.857-.344 1.054-.048 1.37-.058 4.04-.058zm0 11.531a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.538-.203a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-indigo-700 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-indigo-800 rounded-md p-3 text-sm">
                  <h4 className="font-medium mb-2 text-yellow-300">
                    {lang === 'hi' ? 'न्यूज़लेटर सब्सक्राइब करें' : 'Subscribe to Newsletter'}
                  </h4>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder={lang === 'hi' ? 'आपका ईमेल यहां लिखें' : 'Enter your email'} 
                      className="flex-grow px-3 py-2 bg-indigo-700 border border-indigo-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-white placeholder-indigo-300"
                    />
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-indigo-900 px-3 py-2 rounded-r-md transition-colors duration-300 font-medium">
                      {lang === 'hi' ? 'भेजें' : 'Send'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        
        {/* Copyright Bar - Also extends edge-to-edge with container for content */}        <div className="bg-indigo-950 py-3">
          <Container>
            <div className="text-center text-xs sm:text-sm text-white">
              <p>
                © {new Date().getFullYear()} शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज. {content.allRightsReserved}
              </p>
              <p className="mt-1 text-indigo-200 text-xs">
                उत्तर प्रदेश सरकार द्वारा मान्यता प्राप्त
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
