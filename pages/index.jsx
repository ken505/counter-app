import Head from "next/head";
import { DarkModeMenu } from "../components/DarkModeMenu";
import { InfoModal } from "../components/InfoModal";
import { Minus } from "../components/Minus";
import { Pulus } from "../components/Pulus";
import { SnsShare } from "../components/SnsShare";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
      <Head>
        <title>Counter App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="https://counter-app-theta.vercel.app/"
        />
        <meta property="og:title" content="Counter - App" />
        <meta property="og:description" content="Counter - App" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/68226398/119503313-ce1a0f80-bda5-11eb-880a-036ff2aa6ee9.jpeg"
        />
      </Head>
      <DarkModeMenu />
      <h1 className="text-4xl text-gray-100 font-bold select-none">
        Counter - App
      </h1>
      <p className="h-80 w-40 text-8xl text-gray-100 font-bold flex justify-center items-center select-none">
        9999
      </p>
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
        <div
          class="fb-like"
          data-href="https://counter-app-theta.vercel.app/"
          data-width=""
          data-layout="button_count"
          data-action="like"
          data-size="small"
          data-share="false"
        ></div>
      </div>
    </div>
  );
}

// text-center align-middle
// <p className="h-55 w-40 text-gray-700 flex justify-center items-center"></p>
