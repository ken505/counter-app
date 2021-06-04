import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AuthUserProvider } from "../context/AuthUserContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
};
export default MyApp;
