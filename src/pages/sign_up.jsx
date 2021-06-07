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
    <div className="min-h-screen bg-pink-400 grid grid-cols-1 items-center text-center">
      <form onSubmit={onSubmit}>
        {error && <alert color="danger">{error}</alert>}
        <label for="signUpEmail">Email</label>
        <div>
          <input
            className="w-64"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            id="signUpEmail"
            placeholder="Email"
          />
        </div>
        <label for="signUpPassword" sm={4}>
          Password
        </label>
        <div>
          <input
            className="w-64"
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value)}
            id="signUpPassword"
            placeholder="Password"
          />
        </div>
        <label for="signUpPassword2" sm={4}>
          Confirm Password
        </label>
        <div>
          <input
            className="w-64"
            type="password"
            name="password"
            value={passwordTwo}
            onChange={(event) => setPasswordTwo(event.target.value)}
            id="signUpPassword2"
            placeholder="Password"
          />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
