import { Card, Col, Row } from "react-bootstrap";
import { BsChatLeftTextFill } from "react-icons/bs";
import { CiCalculator2 } from "react-icons/ci";
import { GiEarthAmerica } from "react-icons/gi";

const Desktop = () => {
  return (
    <>
      <p className="fs-1">Mathematics</p>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-1">
                    <CiCalculator2 size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <hr className="w-50 mx-auto mt-5" />

      <p className="fs-1 text-end">Languages</p>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-1">
                    <BsChatLeftTextFill size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <hr className="w-50 mx-auto mt-5" />

      <p className="fs-1">Geography</p>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-1">
                    <GiEarthAmerica size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Desktop;
