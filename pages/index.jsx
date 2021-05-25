import { DarkModeMenu } from "../components/DarkModeMenu";
import { Minus } from "../components/Minus";
import { Pulus } from "../components/Pulus";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
    <DarkModeMenu />
      <h1 className="text-4xl text-gray-100 font-bold select-none">Counter</h1>
      <p className="h-80 w-40 text-8xl text-gray-100 font-bold flex justify-center items-center select-none">
        9999
      </p>
      <div className="flex">
        <Minus />
        <Pulus />
      </div>
    </div>
  );
}

// text-center align-middle
// <p className="h-55 w-40 text-gray-700 flex justify-center items-center"></p>
