import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Desktop from "./desktop";
import Mobile from "./mobile";

const RegisterComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Container>{isMobile ? <Mobile/> : <Desktop />}</Container>;
};

export default RegisterComponent;
