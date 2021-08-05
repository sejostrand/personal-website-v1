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

  // const redirect_uri = 'http://localhost:3000';
  // const clientId = '6231f7bb0f2f402e82ecc45d4daee27d';
  // const clientSecret = '581ff199ca0a43478b24e524d775901c';
  // const AUTHORIZE = 'https://accounts.spotify.com/authorize';

  // const requestAuthorization = () => {

  //   let url = AUTHORIZE;
  //   url += '?client_id=' + clientId;
  //   url += '&response_type=code';
  //   url += '&redirect_uri=' + encodeURI(redirect_uri);
  //   url += '&show_dialog=true';
  //   url += '&scope=user--top-read';
  //   console.log(url);
  // };
  // requestAuthorization();

  const openView = (id) => {
    let currentView = document.getElementsByClassName('open-section')[0];
    currentView.classList.replace('open-section', 'closed-section');
    document
      .getElementById(id)
      .classList.replace('closed-section', 'open-section');
    setView(id);
  };

  return (
    <div className='w-full h-screen relative flex flex-col '>
      <Header />
      <div className='flex flex-row w-full justify-end text-white'>
        <Landing openView={openView} />
        <About openView={openView} />
        <Projects openView={openView} />
        <Contact openView={openView} />
      </div>
      <Footer />
    </div>
  );
}

// export async function getStaticProps(context) {}
