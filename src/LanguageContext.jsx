import React, { createContext, useState, useContext } from 'react';
import langContent from './langContent';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLang = 'hi' }) => {
  const [lang, setLang] = useState(initialLang);

  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'hi' ? 'en' : 'hi');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, langContent }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
