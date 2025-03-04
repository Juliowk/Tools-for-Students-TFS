import { Row } from "react-bootstrap";
import UserListDesktop from "./userListDesktop";

const HomeDesktop = () => {
  return (
    <>
      <Row className="mt-5 justify-content-center">
        <img className="w-50" src="/usersImage.svg" />
      </Row>
      <Row>
        <UserListDesktop />
      </Row>
    </>
  );
};

export default HomeDesktop;
