import { Row } from "react-bootstrap";
import FormLogin from "./form";

const ContentsDesktop = () => {
  return (
    <>
      <Row className="mt-5 justify-content-center">
        <img className="w-50" src="/loginImage.svg" />
      </Row>
      <Row>
        <FormLogin />
      </Row>
    </>
  );
};

export default ContentsDesktop;
