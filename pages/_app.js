import '../styles/globals.css';
import { createContext } from 'react';
import { getStrapiMedia } from './api/media';
import { fetchAPI } from './api/api';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext.Provider value={global}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
