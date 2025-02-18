import { Row } from "react-bootstrap";
import UserListMobile from "./userListMobile";

const HomeMobile = () => {
  return (
    <>
      <Row className="mt-5 justify-content-center">
        <img className="" src="/usersImage.svg" />
      </Row>
      <Row>
        <UserListMobile />
      </Row>
    </>
  );
};

export default HomeMobile;
