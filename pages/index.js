import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Landing from './views/Landing';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [view, setView] = useState('landing');
  const [theme, setTheme] = useState('');
  const [language, setLanguage] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (window.localStorage.language == null) {
      window.localStorage.setItem('language', 'english');
    } else {
      setLanguage(window.localStorage.language);
    }
  }, [refresh]);

  useEffect(() => {
    if (
      window.localStorage.theme === 'dark' ||
      (!('theme' in window.localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(window.localStorage.theme);
  }, [refresh]);

  const openView = (id) => {
    let currentView = document.getElementsByClassName('open-section')[0];
    currentView.classList.replace('open-section', 'closed-section');
    document
      .getElementById(id)
      .classList.replace('closed-section', 'open-section');
    setView(id);
  };

  const toggleTheme = () => {
    if (theme == 'dark') {
      window.localStorage.setItem('theme', 'light');
    } else {
      window.localStorage.setItem('theme', 'dark');
    }
    setRefresh(!refresh);
  };

  const toggleLanguage = () => {
    if (language == 'english') {
      window.localStorage.setItem('language', 'spanish');
    } else {
      window.localStorage.setItem('language', 'english');
    }
    setRefresh(!refresh);
  };

  return (
    <div className='w-full h-screen relative flex flex-col'>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <div className='flex flex-row w-full text-black dark:text-white'>
        <Landing openView={openView} theme={theme} />
        <About openView={openView} language={language} />
        <Projects openView={openView} language={language} />
        <Contact openView={openView} language={language} />
      </div>
      <Footer />
    </div>
  );
}

// export async function getStaticProps(context) {}
