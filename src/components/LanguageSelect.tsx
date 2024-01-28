import React from 'react';

import { useTranslation } from 'react-i18next';
import { Select } from '@mantine/core';

interface LanguageDetails {
  nativeName: string;
}

interface Languages {
  [key: string]: LanguageDetails;
}

const lngs: Languages = {
  en: { nativeName: 'EN' },
  ru: { nativeName: 'РУ' },
  uz: { nativeName: 'UZ' },
};

const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const [placeholder, setPlaceholder] = React.useState('');

  const languageOptions = Object.keys(lngs).map((lng) => ({
    value: lng,
    label: lngs[lng].nativeName,
  }));

  const formatLanguageCode = (code: string) => {
    switch (code) {
      case 'en':
        return 'EN';
      case 'ru':
        return 'РУ';
      case 'uz':
        return 'UZ';
      default:
        return 'EN';
    }
  };
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setPlaceholder(formatLanguageCode(language));
  };

  React.useEffect(() => {
    setPlaceholder(formatLanguageCode(i18n.language));
  }, [i18n.language]);

  return (
    <Select
      w={70}
      data={languageOptions}
      onSelect={() => handleLanguageChange}
      placeholder={placeholder}
    />
  );
};

export default LanguageSelect;
