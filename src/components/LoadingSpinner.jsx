import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

const LoadingSpinner = () => {
  const { lang, langContent } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      <p className="mt-4 text-gray-600">{langContent[lang].loading}</p>
    </div>
  );
};

export default LoadingSpinner; 