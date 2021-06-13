import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AuthUserProvider } from "../context/AuthUserContext";

const MyApp = (props) => {
  return (
    <AuthUserProvider>
      <props.Component {...props.pageProps} />
    </AuthUserProvider>
  );
};
export default MyApp;
