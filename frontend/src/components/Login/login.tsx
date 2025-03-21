import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ContentsMobile from "./mobile";
import ContentsDesktop from "./desktop";

function LoginComponent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {isMobile ? (
        <>
          <ContentsMobile />
          <p className="fs-5 text-center mb-5">
            Don't have an anccount? <a href="/register">Register</a>
          </p>
        </>
      ) : (
        <>
          <ContentsDesktop />
          <p className="fs-5 text-center mb-5">
            Don't have an anccount?{" "}
            <a href={import.meta.env.VITE_URL_PAGE_REGISTER}>Register</a>
          </p>
        </>
      )}
    </Container>
  );
}

export default LoginComponent;
