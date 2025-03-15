import { Col, Container, Row } from "react-bootstrap";

const WelcomeComponent = () => {
  return (
    <Container className="bg-body-tertiary rounded" fluid>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img style={{ width: "90%" }} src="./homeImage.svg" />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div className="jumbotron">
            <h1 className="display-4">Welcome!</h1>
            <p className="lead">
              To <i>Tools For Students</i> ✌🏻️
            </p>
            <hr className="my-4 me-5" />
            <p className="lead">
              This is a web application developed to centralize, categorize and
              simplify access to digital educational tools. The proposal seeks
              to provide a more fluid and organized experience for students,
              reducing the difficulties encountered when searching for study
              platforms on the internet.
            </p>
            <p className="lead mt-4">
              <a className="btn btn-outline-dark btn-lg" role="button">
                Start your studies
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeComponent;
