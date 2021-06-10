// import { InfoModal } from "../components/InfoModal";
// import { SnsShare } from "../components/SnsShare";
// import { TaskItem } from "../components/TaskItem";
// import { LocalHead } from "../components/LacalHead";
// import { Link } from "react-router-dom";

// const SignUp = () => {
// return (
// <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-green-400 dark:from-gray-900 to-blue-400 dark:to-purple-800">

{
  /* <LocalHead />
      <InfoModal />
      <div>Login</div>
      <Link href="/">
      <a>back to index</a>
      </Link>
      <SnsShare
        url={"https://counter-app-theta.vercel.app/"}
        title={"Counter - App"}
      /> */
}

{
  /* 
    </div>
  );
};
export default SignUp; */
}

import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthUserContext";
import Link from "next/link";

// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Alert,
// } from "reactstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
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
    event.preventDefault();
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
        <label for="signUpEmail" className="text-xl">
          Email
        </label>
        <div className="mb-5">
          <input
            className="w-64 p-3 mt-1 rounded-md dark:bg-gray-700 dark:text-gray-300
            focus:outline-none focus:ring"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            id="signUpEmail"
            placeholder="Email"
          />
        </div>
        <label for="signUpPassword" className="text-xl">
          Password
        </label>
        <div className="mb-5">
          <input
            className="w-64 p-3 mt-1 rounded-md dark:bg-gray-700 dark:text-gray-300
            focus:outline-none focus:ring"
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value)}
            id="signUpPassword"
            placeholder="Password"
          />
        </div>
        <label for="signUpPassword2" className="text-xl">
          Confirm Password
        </label>
        <div className="mb-10">
          <input
            className="w-64 p-3 mt-1 rounded-md dark:bg-gray-700 dark:text-gray-300
            focus:outline-none focus:ring"
            type="password"
            name="password"
            value={passwordTwo}
            onChange={(event) => setPasswordTwo(event.target.value)}
            id="signUpPassword2"
            placeholder="Password"
          />
        </div>
        <p>{error && <alert className="text-red-500">{error}</alert>}</p>
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
