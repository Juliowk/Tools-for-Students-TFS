import { Container } from "react-bootstrap";
import NavbarComponent from "../Navbar/navbarHome";
import WelcomeComponent from "./Welcome/section";

const HomeComponent = () => {
  return (
    <Container fluid>
      <NavbarComponent />
      <WelcomeComponent />
    </Container>
  );
};

export default HomeComponent;
