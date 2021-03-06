import Head from 'next/head';

import logoNext from '../assets/logo.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Initial Template | Next</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          type="image/png"
          href="https://i.ibb.co/D7s4W18/favicon.png"
        />
      </Head>

      <main>
        <h1>Initial Template with Next</h1>
        <img src={logoNext} alt="logo.png" />
      </main>
    </div>
  );
}
