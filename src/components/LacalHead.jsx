import Head from "next/head";

export const LocalHead = () => {
  return (
    <Head>
      <title>Todo App</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://counter-app-theta.vercel.app/" />
      <meta property="og:title" content="Todo-App" />
      <meta
        property="og:description"
        content="This Todo-App is beautiful and easy to use. ✨"
      />
      <meta property="og:image" content="" />
    </Head>
  );
};
