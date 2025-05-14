import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext.jsx';
import Container from '../components/Container';

const Unauthorized = () => {
  const { lang, langContent } = useLanguage();

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {langContent[lang].unauthorized.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {langContent[lang].unauthorized.message}
            </p>
          </div>
          <div>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {langContent[lang].home}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Unauthorized;