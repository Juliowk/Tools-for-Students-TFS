import { Container } from "react-bootstrap";
import NavbarComponent from "../Navbar/navbarHome";
import WelcomeComponent from "./WelcomeComponent/section";
import ToolsComponents from "./ToolsComponent/tools";

const HomeComponent = () => {
  return (
    <Container fluid>
      <NavbarComponent />
      <WelcomeComponent />
      <ToolsComponents />
    </Container>
  );
};

export default HomeComponent;
