import { Card, Col, Row } from "react-bootstrap";
import { BsChatLeftText, BsClockHistory } from "react-icons/bs";
import { CiCalculator2 } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
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
        <a
          href="https://www.geogebra.org/calculator"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">GeoGebra</p>

          <Col>
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
        </a>

        <a
          href="https://photomath.com/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Photomath</p>

          <Col>
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
        </a>

        <a
          href="https://www.wolframalpha.com/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Wolfram Alpha</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="fs-1">
                    <CiCalculator2 size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>

        <a
          href="https://pt.khanacademy.org/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Khan Academy</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-1">
                    <CiCalculator2 size={50} />{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>
      </Row>

      <hr className="w-50 mx-auto mt-5" />

      <p className="fs-1 text-end">
        Languages <BsChatLeftText />
      </p>
      <Row xs={1} md={4} className="g-4">
        <a
          href="https://conjugacao.reverso.net/conjugacao-portugues.html"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Conjugador Reverso</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="fs-1">
                    <BsChatLeftText size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>

        <a
          href="https://pt.duolingo.com/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Duolingo</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="fs-1">
                    <BsChatLeftText size={50} />{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>

        <a
          href="https://www.spanishdict.com/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">SpanishDict</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="fs-1">
                    <BsChatLeftText size={50} />{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>

        <a
          href="https://pt.khanacademy.org/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Khan Academy</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-1">
                    <BsChatLeftText size={50} />{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>
      </Row>

      <hr className="w-50 mx-auto mt-5" />

      <p className="fs-1">
        Geography <GiEarthAmerica />
      </p>
      <Row xs={1} md={4} className="g-4">
        <a
          href="https://www.google.com.br/earth/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Google Earth</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="fs-1">
                    <GiEarthAmerica size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>

        <a
          href="https://www.seterra.com/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Seterra</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="fs-1">
                    <GiEarthAmerica size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>

        <a className="link-dark link-underline link-underline-opacity-0">
          <p className="fs-3 text-center mb-2">Ainda não declarado</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="fs-1">
                    <FaRegLightbulb size={50} />
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>

        <a
          href="https://pt.khanacademy.org/"
          target="_blank"
          className="link-dark link-underline link-underline-opacity-0"
        >
          <p className="fs-3 text-center mb-2">Khan Academy</p>

          <Col>
            <div className="ratio ratio-1x1">
              <Card className="bg-body-tertiary shadow">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-1">
                    <GiEarthAmerica size={50} />{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </a>
      </Row>
    </>
  );
};

export default Desktop;
