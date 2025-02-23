import { Col, Row } from "react-bootstrap";
import FormRegister from "./formRegister";
import { IoPersonAddSharp } from "react-icons/io5";

const Desktop = () => {
  return (
    <>
      <Row className=" justify-content-center">
        <img className="w-50" src="/registerImage.svg" />
      </Row>
      <Row>
        <p className="text-center fs-1">
          Register <IoPersonAddSharp size={30} />
        </p>
      </Row>
      <Row className="d-flex justify-content-center mt-5">
        <Col md={6}>
          <FormRegister />
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
