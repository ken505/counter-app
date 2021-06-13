import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthUserContext";
import { LocalHead } from "../components/LacalHead";
import { InfoModal } from "../components/InfoModal";
import { SnsShare } from "../components/SnsShare";
import { LoginButton } from "../components/Atoms/LoginButton";
import { CreateOneButton } from "../components/Atoms/CreateOneButton";
import { TrialAccount } from "../components/Atoms/TrialAccount";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();
  const onSubmit = (e) => {
    setError(null);
    signInWithEmailAndPassword(email, password)
      //....... ↓ authUser が使われていない。
      // .then((authUser) => {
      .then(() => {
        router.push("/logged_in");
      })
      .catch((error) => {
        setError(error.message);
      });
    e.preventDefault();
  };
  // ↓ ❗️エラー表示後、リロードしない状態からログインすると、
  // react_devtools_backend.js:2560 Warning: Cannot update a component (`Toaster`) while rendering a different component (`Home`). To locate the bad setState() call inside `Home`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render となる。
  const notify = useMemo(() => toast(error), [error]);
  return (
    <div
      className="font-mono text-gray-100 dark:text-gray-400
      bg-gradient-to-tr 
    from-green-400 dark:from-gray-900 
    to-blue-400 dark:to-purple-800"
    >
      <LocalHead />
      <InfoModal />
      {/* ↓ エラーの回数が表示されて困っている❗️ */}
      {error && (
        <div>
          {notify} <Toaster />
        </div>
      )}
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

          <LoginButton />
          <CreateOneButton />
          <TrialAccount />
        </form>
      </div>
      <SnsShare />
    </div>
  );
};
export default Home;
