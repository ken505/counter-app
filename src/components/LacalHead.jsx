import Head from "next/head";

export const LocalHead = () => {
  return (
    <Head>
      <title>Memo App</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://counter-app-theta.vercel.app/" />
      <meta property="og:title" content="Memo - App" />
      <meta
        property="og:description"
        content="This Memo is beautiful and easy to use. ✨"
      />
      <meta property="og:image" content="" />
    </Head>
  );
};
