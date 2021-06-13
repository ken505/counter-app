import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../context/AuthUserContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (e) => {
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
          router.push("/logged_in");
        })
        .catch((error) => {
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    else setError("Password do not match");
    e.preventDefault();
  };
  //  custom-container
  return (
    <div
      className="min-h-screen grid grid-cols-1 items-center text-center text-gray-500 dark:text-gray-400
      font-mono bg-gradient-to-tr from-yellow-200 dark:from-pink-800 
    to-pink-400 dark:to-purple-900"
    >
      <form onSubmit={onSubmit}>
        <p className="text-3xl font-bold mb-7">Create an account</p>
        <label className="text-xl">
          Email
        </label>
        <div className="mb-5">
          <input
            className="w-64 p-3 mt-1 rounded-md dark:bg-gray-700 dark:text-gray-300
            focus:outline-none focus:ring"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="signUpEmail"
            placeholder="Email"
          />
        </div>
        <label className="text-xl">Password</label>
        <div className="mb-5">
          <input
            className="w-64 p-3 mt-1 rounded-md dark:bg-gray-700 dark:text-gray-300
            focus:outline-none focus:ring"
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
            id="signUpPassword"
            placeholder="Password"
          />
        </div>
        <label className="text-xl">Confirm Password</label>
        <div className="mb-10">
          <input
            className="w-64 p-3 mt-1 rounded-md dark:bg-gray-700 dark:text-gray-300
            focus:outline-none focus:ring"
            type="password"
            name="password"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
            id="signUpPassword2"
            placeholder="Password"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <button
            className=" px-5 py-3 w-60 mb-12 rounded-full border border-white dark:border-gray-300 focus:outline-none dark:text-gray-200
        bg-gradient-to-tr from-yellow-200 dark:from-pink-800 
      to-pink-400 dark:to-purple-900 hover:opacity-70 dark:hover:opacity-40
        "
          >
            Sign Up
          </button>
        </div>
        <div>
          <Link href="/">
            <button
              className="dark:text-gray-200 text-xs px-5 py-2 rounded-full border border-white focus:outline-none dark:border-gray-300
        bg-gradient-to-tr from-yellow-200 dark:from-pink-800 
      to-pink-400 dark:to-purple-900 hover:opacity-70 dark:hover:opacity-40
        "
            >
              Rethink !
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
