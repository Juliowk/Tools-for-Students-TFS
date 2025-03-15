import { Card, Col, Row } from "react-bootstrap";
import { FaRegLightbulb } from "react-icons/fa";

export const DesktopCol = () => {
  return (
    <Col xs={12} md={6} className="d-flex justify-content-center">
      <div className="w-75">
        <h1 className="display-5 pb-4">Did you have any questions?</h1>

        <p className="lead">
          Artificial Intelligence can be great allies in your learning. With it,
          you can clarify doubts, organize ideas and improve your work. Explore
          new ways to study with tools that make your daily life easier.
          Discover how technology can transform your study routine!
        </p>

        <p className="lead mt-5">
          <a className="btn btn-outline-dark btn-lg w-100 text-center" role="button">
            Discover the recommended ones!
          </a>
        </p>
        
      </div>
    </Col>
  );
};

export const DesktopIaSuggestions = () => {
    return (
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
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
    );
}