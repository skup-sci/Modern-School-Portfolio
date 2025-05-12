import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext.jsx';

const useLanguage = () => {
  const { lang, setLang, langContent } = useContext(LanguageContext);

  const strings = langContent[lang] || langContent['hi'];

  return { lang, setLang, strings };
};

export default useLanguage;
