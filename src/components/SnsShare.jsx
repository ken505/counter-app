import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

export function SnsShare(props) {
  const { url, title } = props;
  return (
    <div className="flex flex-col fixed bottom-3 right-3 ">
    {/*  */}
{/* sm:flex-row sm:static  */}
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon
          size={32}
          round
          className="hover:opacity-70 dark:opacity-40 mx-1 my-1"
        />
      </TwitterShareButton>
      {/* <LineShareButton url={url} title={title}>
        <LineIcon
          size={32}
          round
          className=" hover:opacity-70 dark:opacity-40 mx-1 my-1"
        />
      </LineShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon
          size={32}
          round
          className=" hover:opacity-70 dark:opacity-40  mx-1 my-1"
        />
      </FacebookShareButton> */}
    </div>
  );
}
