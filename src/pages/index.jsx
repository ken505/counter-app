import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../context/AuthUserContext";
import { LocalHead } from "../components/LacalHead";
import { InfoModal } from "../components/InfoModal";
import { SnsShare } from "../components/SnsShare";
// import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();
  const onSubmit = (e) => {
    setError(null);
    signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        router.push("/logged_in");
      })
      .catch((error) => {
        setError(error.message);
      });
    e.preventDefault();
  };
  return (
    <div
      className="font-mono text-gray-100 dark:text-gray-400
      bg-gradient-to-tr 
    from-green-400 dark:from-gray-900 
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
              className="text-gray-500 dark:text-gray-300 
              w-64 p-3 rounded-md dark:bg-gray-700
              focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="text-xl mt-5 mb-1">Password</p>
          <div className="mb-10">
            <input
              className="text-gray-500 dark:text-gray-300
              w-64 p-3 rounded-md dark:bg-gray-700
              focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <button
              className="text-xl w-60 px-5 py-3 mb-10 
              rounded-full border border-white dark:border-gray-400 focus:outline-none  
              bg-gradient-to-tr 
            from-green-400 dark:from-gray-900 
            to-blue-400 dark:to-purple-800 
              hover:opacity-60 dark:hover:opacity-50"
            >
              Login
            </button>
          </div>
          <p className="text-mb mb-1">No account?</p>
          <Link href="/sign_up">
            <button
              className="text-xs px-5 py-2 mb-8 rounded-full 
              border border-white dark:border-gray-400 focus:outline-none 
              bg-gradient-to-tr 
            from-green-400 dark:from-gray-900 
            to-blue-400 dark:to-purple-800
              cursor-pointer  hover:opacity-60 dark:hover:opacity-50"
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
