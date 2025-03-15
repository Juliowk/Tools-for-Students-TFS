import { Accordion, Card, Col, Row } from "react-bootstrap";
import { FaRegLightbulb } from "react-icons/fa";

export const MobileCol = () => {
  return (
    <Col xs={12} md={6} className="d-flex justify-content-center pb-3">
      <div>
        <h1 className="display-5">Did you have any questions?</h1>

        <p className="lead">
          Artificial Intelligence can be great allies in your learning. With it,
          you can clarify doubts, organize ideas and improve your work. Explore
          new ways to study with tools that make your daily life easier.
          Discover how technology can transform your study routine!
        </p>
      </div>
    </Col>
  );
};

export const MobileIaSuggestions = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Artificial Intelligence suggestions</Accordion.Header>
        <Accordion.Body>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <div className="ratio ratio-1x1">
                  <Card className="bg-body-tertiary shadow-sm">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="fs-1">
                        <FaRegLightbulb size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
