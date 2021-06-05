import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { InfoModal } from "../components/InfoModal";
import { SnsShare } from "../components/SnsShare";
import { LocalHead } from "../components/LacalHead";
import { useAuth } from "../context/AuthUserContext";

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
  return (
    <div
      className="min-h-screen 
    bg-gradient-to-tr from-green-400 dark:from-gray-900 
    to-blue-400 dark:to-purple-800
    flex flex-col justify-center items-center "
    >
      <LocalHead />
      <InfoModal />
      <Container className="text-center" style={{ padding: "40px 0px" }}>
        <h2 className="text-gray-100 font-mono text-3xl mb-8">Todo-app🐱</h2>
        <p className="text-gray-100 font-mono text-xl mb-1">E-mail</p>
        <Row style={{ maxWidth: "400px", margin: "auto" }}>
          <Col>
            <form onSubmit={onSubmit}>
              {error && <Alert color="danger">{error}</Alert>}
              <input
                className="p-3 rounded-md"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                id="loginEmail"
                placeholder="Email"
                size="20"
              />
              <FormGroup row>
                <p className="text-gray-100 font-mono text-xl mt-5 mb-1">
                  Password
                </p>
                {/* <Label for="loginPassword" sm={4}>
                  Password
                </Label> */}
                <Col sm={8}>
                  <input
                    className="p-3 rounded-md"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    id="loginPassword"
                    placeholder="Password"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Button className="text-gray-100 font-mono text-3xl font-bold mt-7 mb-5">
                  Login
                </Button>
              </FormGroup>
              <FormGroup className="text-gray-100 font-mono text-xl mt-5 mb-5">
                No account?
                <Link href="/sign_up">
                  <p className="text-gray-100 font-mono text-xl font-extrabold mt-1 mx-8">
                    Create one
                  </p>
                </Link>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Container>
      <p className="text-gray-100 font-mono text-md mb-3">Trial Account</p>
      <div className="text-gray-100 font-mono text-md">
        <span>Email</span>
        <span className="font-bold mx-3">test@tmail.com</span>
      </div>
      <div className="text-gray-100 font-mono text-md ">
        <span>Password</span>
        <span className="font-bold mx-3">123456</span>
      </div>
      <SnsShare
        url={"https://counter-app-theta.vercel.app/"}
        title={"Counter - App"}
      />
    </div>
  );
};
export default Home;
