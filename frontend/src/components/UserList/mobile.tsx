import { Row } from "react-bootstrap";
import UserListMobile from "./userListMobile";

const Mobile = () => {
  return (
    <>
      <Row className="mt-5 justify-content-center">
        <img src="/usersImage.svg" />
      </Row>
      <Row>
        <UserListMobile />
      </Row>
    </>
  );
};

export default Mobile;
