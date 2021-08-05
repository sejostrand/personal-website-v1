import '../styles/globals.css';
import { createContext } from 'react';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext.Provider value={global}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
