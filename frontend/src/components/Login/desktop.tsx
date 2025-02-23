import { Col, Row } from "react-bootstrap";
import FormLogin from "./form";

const ContentsDesktop = () => {
  return (
    <>
      <Row className="mt-5 justify-content-center">
        <img className="w-50" src="/loginImage.svg" />
      </Row>
      <Row className="d-flex justify-content-center mb-5">
        <Col md={6}>
          <FormLogin />
        </Col>
      </Row>
    </>
  );
};

export default ContentsDesktop;
