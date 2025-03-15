import { Container } from "react-bootstrap";

import NavbarComponent from "../Navbar/navbarHome";
import WelcomeComponent from "./WelcomeComponent/section";
import ToolsComponents from "./ToolsComponent/tools";
import AISuggestionComponent from "./AISuggestion/AISuggestion";

const HomeComponent = () => {
  return (
    <Container fluid>
      <NavbarComponent />
      <WelcomeComponent />
      <ToolsComponents />
      <AISuggestionComponent />
    </Container>
  );
};

export default HomeComponent;
