import { TwitterShareButton, TwitterIcon } from "react-share";

export const SnsShare = () => {
  return (
    <div className="flex flex-col fixed bottom-3 right-3 ">
      <TwitterShareButton
        className="focus:outline-none focus:ring rounded-md"
        url="https://counter-app-theta.vercel.app/"
        title="Todo - App"
      >
        <TwitterIcon
          size={32}
          round
          className="hover:opacity-70 dark:opacity-40 mx-1 my-1"
        />
      </TwitterShareButton>
    </div>
  );
};
