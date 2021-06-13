import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import { LocalHead } from "../components/LacalHead";
import { InfoModal } from "../components/InfoModal";
import { SnsShare } from "../components/SnsShare";
import { LoginButton } from "../components/Atoms/LoginButton";
import { CreateOneButton } from "../components/Atoms/CreateOneButton";
import { TrialAccount } from "../components/Atoms/TrialAccount";
import { LayoutIndex } from "../components/Layout/LayoutIndex";
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
    <LayoutIndex>
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
          <LoginButton />
          <CreateOneButton />
          <TrialAccount />
        </form>
      </div>
      <SnsShare />
    </LayoutIndex>
  );
};
export default Home;
