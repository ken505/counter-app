import Head from "next/head";

export function LocalHead() {
  return (
    <Head>
      <title>Counter App</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://counter-app-theta.vercel.app/" />
      <meta property="og:title" content="Count - App" />
      <meta
        property="og:description"
        content="This counter is beautiful and easy to use. ✨"
      />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/68226398/119667377-33870280-be71-11eb-96d2-a9c5d21437ca.jpg"
      />
    </Head>
  );
}
