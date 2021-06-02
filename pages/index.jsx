import { InfoModal } from "../components/InfoModal";
import { SnsShare } from "../components/SnsShare";
import { LocalHead } from "../components/LacalHead";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-green-400 dark:from-gray-900 to-blue-400 dark:to-purple-800">
      <LocalHead />
      <InfoModal />
    <div>Index</div>
      <SnsShare
        url={"https://counter-app-theta.vercel.app/"}
        title={"Counter - App"}
      />
    </div>
  );
};
export default Home;
