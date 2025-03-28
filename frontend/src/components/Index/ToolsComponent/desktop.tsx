import { Card, Col, Row } from "react-bootstrap";
import { BsChatLeftText, BsClockHistory } from "react-icons/bs";
import { CiCalculator2 } from "react-icons/ci";
import { GiEarthAmerica } from "react-icons/gi";

const Desktop = () => {
  return (
    <>
      <p className="fs-1 text-end" id="youtHistory">
        Your History <BsClockHistory />
      </p>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-1">
                    <BsClockHistory size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <hr className="w-50 mx-auto mt-5" />

      <p className="fs-1">
        Mathematics <CiCalculator2 />
      </p>
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

      <p className="fs-1 text-end">
        Languages <BsChatLeftText />
      </p>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-1">
                    <BsChatLeftText size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <hr className="w-50 mx-auto mt-5" />

      <p className="fs-1">
        Geography <GiEarthAmerica />
      </p>
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
