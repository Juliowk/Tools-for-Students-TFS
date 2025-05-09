import { FormEvent, useState } from "react";
import { Alert, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { BiError } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { DecodingTimeExp } from "./decodingTime";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productionEnvironment = import.meta.env.VITE_PRODUCTIONENVIRONMENT;

    const url =
      productionEnvironment === "true"
        ? import.meta.env.VITE_URL_BACKEND_PROD
        : import.meta.env.VITE_URL_BACKEND_DEV;

    const body = {
      email,
      password,
    };

    try {
      const response = await fetch(`${url}/users/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
      }

      const token = await response.json();
      const expiration = DecodingTimeExp(token);

      if (expiration) {
        console.log(`Seu token expira em: ${expiration.toLocaleString()}`);
        localStorage.setItem("expirationDate", expiration.getTime().toString());
      }

      localStorage.setItem("token", token);

      navigate(import.meta.env.VITE_URL_PAGE_HOME);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      {error && (
        <Alert key={"danger"} variant={"danger"}>
          <BiError /> {error}
        </Alert>
      )}
      <Form className="w-100" onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="mb-3">
            <FloatingLabel
              controlId="floatingUsername"
              label="Email address:"
            >
              <Form.Control
                type="text"
                placeholder="Email adress:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="8" className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Password:">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="4" className="mb-3">
            <Button className="h-100 w-100" variant="secondary" type="submit">
              <CiLogin size={40} />
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default FormLogin;
