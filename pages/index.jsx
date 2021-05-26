import Head from "next/head";
import { InfoModal } from "../components/InfoModal";
import { Minus } from "../components/Minus";
import { Pulus } from "../components/Pulus";
import { SnsShare } from "../components/SnsShare";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-green-400 dark:from-gray-900 to-blue-400 dark:to-purple-800
    "
    >
      <Head>
        <title>Counter App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="https://counter-app-theta.vercel.app/"
        />
        <meta property="og:title" content="Count - App" />
        <meta
          property="og:description"
          content="This counter is beautiful and easy to use. ✨"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/68226398/119603826-e97a2e80-be28-11eb-807e-737317ed3326.jpg"
        />
      </Head>
      <h1 className="text-4xl text-white dark:text-gray-400 font-bold select-none">
        Count - App
      </h1>
      <h1 className="h-80 w-40 text-8xl text-white dark:text-gray-400 font-bold flex justify-center items-center select-none">
        9999
      </h1>
      <div className="flex">
        <Minus />
        <Pulus />
      </div>
      <InfoModal />
      <div className="fixed bottom-4">
        <SnsShare
          url={"https://counter-app-theta.vercel.app/"}
          title={"Counter - App"}
        />
      </div>
    </div>
  );
}

// text-center align-middle
// <p className="h-55 w-40 text-gray-700 flex justify-center items-center"></p>
