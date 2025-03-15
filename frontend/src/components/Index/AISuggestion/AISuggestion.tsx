import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { MobileCol, MobileIaSuggestions } from "./mobile";
import { DesktopCol, DesktopIaSuggestions } from "./desktop";

const AISuggestionComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Container className="bg-body-tertiary rounded-5 py-5 mb-4">
        <Row className="align-items-center">
          {isMobile ? <MobileCol /> : <DesktopCol />}
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src="./aiSuggestion.svg" />
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <Row>
          {isMobile ? <MobileIaSuggestions /> : <DesktopIaSuggestions />}
        </Row>
      </Container>
    </>
  );
};

export default AISuggestionComponent;
