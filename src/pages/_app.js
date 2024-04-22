// Le composant App (_app.js) : 
// - Utilisation de CSS global
// - Conserve son state durant le routing
// - Injecte les données des pages (...pageProps)

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
