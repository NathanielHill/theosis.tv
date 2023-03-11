import Head from "next/head";
import Link from "next/link";

import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Theosis.TV App" />
        <meta name="theme-color" content="#B8860B" />
        <meta property="og:title" content="Theosis.TV" />
        <meta property="og:description" content="Theosis.TV App" />
        <meta
          property="og:image"
          content="https://theosis.tv/og.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <title>Theosis.TV</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-900 bg-brand-khaki">
        <header />
        <main>
          <Component {...pageProps} />
        </main>
        <noscript className="text-center">Turn on JavaScript please.</noscript>
        <footer />
      </div>
    </>
  );
}

export default App;
