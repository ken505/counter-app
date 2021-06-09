import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

export const SnsShare = (props) => {
  const { url, title } = props;
  return (
    <div className="flex flex-col fixed bottom-3 right-3 ">
      {/*  */}
      {/* sm:flex-row sm:static  */}
      <TwitterShareButton
        className="focus:outline-none focus:ring rounded-md"
        url={url}
        title={title}
      >
        <TwitterIcon
          size={32}
          round
          className="hover:opacity-70 dark:opacity-40 mx-1 my-1"
        />
      </TwitterShareButton>
      {/* <LineShareButton
        className="focus:outline-none focus:ring rounded-md"
        url={url} title={title}>
        <LineIcon
          size={32}
          round
          className=" hover:opacity-70 dark:opacity-40 mx-1 my-1"
        />
      </LineShareButton>
      <FacebookShareButton
        className="focus:outline-none focus:ring rounded-md"
        url={url}>
        <FacebookIcon
          size={32}
          round
          className=" hover:opacity-70 dark:opacity-40  mx-1 my-1"
        />
      </FacebookShareButton> */}
    </div>
  );
};
