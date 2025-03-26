import { Container } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <Container
      fluid
      className="bg-body-tertiary py-2 pt-4"
    >
      <p className="text-center fs-5">
        Desenvolvido por{" "}
        <a href="https://github.com/Juliowk" target="_blank">
          @Júlio Elias
        </a>
      </p>
    </Container>
  );
};

export default FooterComponent;
