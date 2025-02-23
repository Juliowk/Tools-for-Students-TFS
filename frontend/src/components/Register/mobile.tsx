import { Col, Row } from "react-bootstrap";
import FormRegister from "./formRegister";
import { IoPersonAddSharp } from "react-icons/io5";

const Mobile = () => {
  return (
    <>
      <Row className="mt-5 justify-content-center">
        <img src="/registerImage.svg" />
      </Row>
      <Row>
        <p className="text-center fs-1">
          Register <IoPersonAddSharp />
        </p>
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <Col md={6}>
          <FormRegister />
        </Col>
      </Row>
    </>
  );
};

export default Mobile;
