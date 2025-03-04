import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { BiError } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const UserListDesktop = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const productionEnvironment = import.meta.env.VITE_PRODUCTIONENVIRONMENT;

  const url =
    productionEnvironment === "true"
      ? import.meta.env.VITE_URL_BACKEND_PROD
      : import.meta.env.VITE_URL_BACKEND_DEV;

  const token = localStorage.getItem("token");

  useEffect(() => {
    const handle = async () => {
      try {
        const response = await fetch(`${url}/users/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data);
        }

        setData(await response.json());
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };

    handle();
  }, [token, url]);

  return (
    <Container className="mb-5 w-50">
      {error && (
        <Alert key={"danger"} variant={"danger"}>
          <BiError /> {error}
        </Alert>
      )}

      <p className="fs-1 text-center">
        Users list <FaUserAlt size={28} />
      </p>

      {Array.isArray(data) && data.length > 0 ? (
        data.map((user, index) => (
          <Card key={index} className="mb-3 shadow p-2">
            <Card.Body>
              <Row>
                <Col xs={7}>
                  <label htmlFor={`name-${index}`}>
                    <strong>Username:</strong>
                  </label>
                  <p id={`name-${index}`} className="fs-5">
                    {user.name}
                  </p>
                </Col>
                <Col xs={5}>
                  <label htmlFor={`occupation-${index}`}>
                    <strong>Your Occupartion:</strong>
                  </label>
                  <p id={`occupation-${index}`} className="fs-5">
                    {user.occupation}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No users!</p>
      )}
    </Container>
  );
};

export default UserListDesktop;
