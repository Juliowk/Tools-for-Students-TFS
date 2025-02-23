import { Row } from "react-bootstrap";
import FormLogin from "./form";

const ContentsMobile = () => {
  return (
    <>
      <Row className="mt-5">
        <img src="/loginImage.svg" />
      </Row>
      <Row className="mt-3">
        <FormLogin/>
      </Row>
    </>
  );
};

export default ContentsMobile;
