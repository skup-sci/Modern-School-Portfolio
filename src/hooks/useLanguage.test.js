import React from 'react';
import { render, screen } from '@testing-library/react';
import useLanguage from './useLanguage';
import { LanguageContext } from '../LanguageContext';

const TestComponent = () => {
  const { lang, strings } = useLanguage();
  return (
    <div>
      <span>{lang}</span>
      <span>{strings.schoolName}</span>
    </div>
  );
};

describe('useLanguage', () => {
  it('returns correct language and strings', () => {
    render(
      <LanguageContext.Provider value={{ lang: 'hi', setLang: jest.fn(), langContent: { hi: { schoolName: 'स्कूल' } } }}>
        <TestComponent />
      </LanguageContext.Provider>
    );
    expect(screen.getByText('hi')).toBeInTheDocument();
    expect(screen.getByText('स्कूल')).toBeInTheDocument();
  });
});
