import { createContext, useContext, useState, type ReactNode } from 'react';

interface LanguageContextType {
  lang: 'ES' | 'EN';
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<string, string>> = {
  ES: {
    // Navbar
    home: 'INICIO',
    music: 'MÚSICA',
    tour: 'CONCIERTOS',
    store: 'TIENDA',
    bio: 'BIO',
    
    // Hero Section
    welcome: 'BIENVENIDO A MI MENTE',
    album: 'EL ÁLBUM',
    hd: '420-HD',
    ultra_color: 'ULTRA COLOR',
    stereo: 'ESTÉREO HI-FI',
    quality: 'ULTRA ALTA CALIDAD',
    
    // Cassette Player
    deck: 'PLATINA ESTÉREO 1',
    playing: 'REPRODUCIENDO >',
    paused: 'PAUSADO ||',
    stop: 'DETENER',
    play: 'REPRODUCIR'
  },
  EN: {
    // Navbar
    home: 'HOME',
    music: 'MUSIC',
    tour: 'TOUR',
    store: 'STORE',
    bio: 'BIO',

    // Hero Section
    welcome: 'WELCOME TO MY MIND',
    album: 'THE ALBUM',
    hd: '420-HD',
    ultra_color: 'ULTRA COLOR',
    stereo: 'STEREO HI-FI',
    quality: 'ULTRA HIGH QUALITY',

    // Cassette Player
    deck: 'STEREO DECK 1',
    playing: 'PLAYING >',
    paused: 'PAUSED ||',
    stop: 'STOP',
    play: 'PLAY'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  const toggleLang = () => setLang((prev) => (prev === 'ES' ? 'EN' : 'ES'));

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage error');
  return context;
};