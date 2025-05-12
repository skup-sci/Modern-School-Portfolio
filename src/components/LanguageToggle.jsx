import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-indigo-100 text-indigo-800 font-medium hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
      aria-label={lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
    >
      {lang === 'hi' ? 'EN' : 'हिं'}
    </button>
  );
};

export default LanguageToggle;
