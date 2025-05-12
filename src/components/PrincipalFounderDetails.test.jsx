import React from 'react';
import { render, screen } from '@testing-library/react';
import PrincipalFounderDetails from './PrincipalFounderDetails';
import { LanguageProvider } from '../LanguageContext';

describe('PrincipalFounderDetails', () => {
  it('renders all people in English', () => {
    render(
      <LanguageProvider initialLang="en">
        <PrincipalFounderDetails />
      </LanguageProvider>
    );
    expect(screen.getByText('Sri Manoj Singh')).toBeInTheDocument();
    expect(screen.getByText("Hon'ble Chief Minister of U.P.")).toBeInTheDocument();
  });

  it('renders all people in Hindi', () => {
    render(
      <LanguageProvider initialLang="hi">
        <PrincipalFounderDetails />
      </LanguageProvider>
    );
    expect(screen.getByText('श्री मनोज सिंह')).toBeInTheDocument();
    expect(screen.getByText('माननीय मुख्यमंत्री, उत्तर प्रदेश')).toBeInTheDocument();
  });
});
