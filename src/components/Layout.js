import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';
import Container from './Container.jsx';

const Layout = ({ children }) => {
  const { lang, langContent, toggleLanguage } = useLanguage();
  const { isAuthenticated, logout, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Memoize nav items to avoid re-creation on every render
  const navItems = useMemo(() => [
    { path: '/', key: 'home' },
    { path: '/about', key: 'about' },
    { path: '/admission', key: 'admission' },
    { path: '/gallery', key: 'gallery' },
    { path: '/academics', key: 'academics' },
    { path: '/faculty', key: 'faculty' },
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
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <Container>
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <img src="/images/Logo_Left.jpg" alt="School Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
                <span className="font-bold text-sm sm:text-lg select-none truncate max-w-[150px] sm:max-w-none">{content.schoolName}</span>
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
      </nav>

      {/* Announcement Bar (below navbar) */}
      <div className="bg-orange-500 text-white mt-14 sm:mt-16 whitespace-nowrap overflow-hidden">
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
      </div>

      {/* Main content wrapper */}
      <main className="flex-1 pt-20 pb-8">
        <Container>
          {children}
        </Container>
      </main>

      <footer className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white mt-12">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* School Info */}
            <div className="md:w-1/3">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-3">
                  <img src="/images/Logo_Left.jpg" alt="School Logo" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{content.schoolName}</h3>
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
            </div>

            {/* Contact Info */}
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
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="bg-indigo-950 py-3">
          <div className="container mx-auto px-4 text-center text-xs sm:text-sm max-w-7xl">
            <p>
              © {new Date().getFullYear()} {content.schoolName}. {content.allRightsReserved}
            </p>
            <p className="mt-1 text-indigo-200 text-xs">
              {content.recognized}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

