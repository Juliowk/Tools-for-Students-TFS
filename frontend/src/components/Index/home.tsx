import { Container } from "react-bootstrap";

import NavbarComponent from "../Navbar/navbarHome";
import WelcomeComponent from "./WelcomeComponent/section";
import ToolsComponents from "./ToolsComponent/tools";
import AISuggestionComponent from "./AISuggestion/AISuggestion";
import FooterComponent from "./Footer/footer";

const HomeComponent = () => {
  return (
    <Container fluid>
      <NavbarComponent />
      <WelcomeComponent />
      <ToolsComponents />
      <AISuggestionComponent />
      <FooterComponent />
    </Container>
  );
};

export default HomeComponent;
