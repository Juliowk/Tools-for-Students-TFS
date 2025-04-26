import { FormEvent, useState } from "react";
import { Alert, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { BiError } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
      name,
      email,
      password,
      occupation: "USER",
    };

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${url}/users/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
      }

      navigate(import.meta.env.VITE_URL_PAGE_LOGIN);
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
      <Form onSubmit={handleSubmit} className="mb-5">
        <Row>
          <Form.Group as={Col} className="mb-3">
            <FloatingLabel controlId="floatingUsername" label="Username:">
              <Form.Control
                type="text"
                placeholder="UserName:"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <FloatingLabel controlId="floatingUsername" label="Email address:">
              <Form.Control
                type="text"
                placeholder="Email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Password:">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Button className="h-100 w-100" variant="secondary" type="submit">
              <CiLogin size={40} />
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default FormRegister;
