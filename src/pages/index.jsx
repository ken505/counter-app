import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthUserContext";
import { LocalHead } from "../components/LacalHead";
import { InfoModal } from "../components/InfoModal";
import { SnsShare } from "../components/SnsShare";
// import { Container } from "reactstrap";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();
  const onSubmit = (event) => {
    setError(null);
    signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        router.push("/logged_in");
      })
      .catch((error) => {
        setError(error.message);
      });
    event.preventDefault();
  };
  // const notify = () => toast({ error });
  const notify = () => toast(<p className="text-red-500">{error}</p>);
  return (
    <div
      className="font-mono text-gray-100 dark:text-gray-400
    bg-gradient-to-tr from-green-400 dark:from-gray-900 
    to-blue-400 dark:to-purple-800 
    "
    >
      <LocalHead />
      <InfoModal />

      <div className="min-h-screen grid grid-cols-1 items-center text-center ">
        <form onSubmit={onSubmit}>
          <h2 className="text-3xl font-bold mb-6">Todo-app</h2>
          <p className="text-xl mb-1">E-mail</p>
          <div>
            <input
              className="w-64 p-3 rounded-md text-gray-500 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              id="loginEmail"
              placeholder="Email"
            />
          </div>
          <p className="text-xl mt-5 mb-1">Password</p>
          <div className="mb-10">
            <input
              className="w-64 p-3 rounded-md text-gray-500 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="loginPassword"
              placeholder="Password"
            />
          </div>
          {/* <button onClick=>Make me a toast</button> */}
          {/* {error && <p className="text-red-500">{error}</p>} */}
          {/* {error && <p>{notify}</p>} */}

          <div>
            <button
              className="w-60 px-5 py-3 mb-10 text-xl
            rounded-full border border-white focus:outline-none dark:border-gray-400  
            bg-gradient-to-tr from-green-400 dark:from-gray-900 
            to-blue-400 dark:to-purple-800 bg-cover
            hover:opacity-60 dark:hover:opacity-50"
            >
              Login
              {error && notify()}
            </button>
            <Toaster className="text-red-500" />
          </div>
          <p className="text-mb mb-1">No account?</p>
          <Link href="/sign_up">
            <button
              className="text-xs px-5 py-2 mb-8 rounded-full border
              border-white focus:outline-none 
              dark:border-gray-400 cursor-pointer bg-gradient-to-tr from-green-400 dark:from-gray-900 
              to-blue-400 dark:to-purple-800 bg-cover 
              hover:opacity-60 dark:hover:opacity-50 "
            >
              Create one
            </button>
          </Link>

          <p className="text-sm mb-1">Trial Account</p>
          <div className="text-md">
            <span className="text-sm">Email</span>
            <span className="font-bold mx-3">test@tmail.com</span>
          </div>
          <div className="text-md ">
            <span className="text-sm">Password</span>
            <span className="font-bold mx-3">123456</span>
          </div>
        </form>
      </div>
      <SnsShare
        url="https://counter-app-theta.vercel.app/"
        title="Todo - App"
      />
    </div>
  );
};
export default Home;
