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
    <div >
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round className="opacity-80 hover:opacity-50 mx-1"/>
      </TwitterShareButton>
      <LineShareButton url={url} title={title}>
        <LineIcon size={32} round className="opacity-80 hover:opacity-50 mx-1"/>
      </LineShareButton>
      <FacebookShareButton url={url} >
        <FacebookIcon size={32} round className="opacity-80 hover:opacity-50 mx-1"/>
      </FacebookShareButton>
    </div>
  );
}
