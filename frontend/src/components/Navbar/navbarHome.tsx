import { useEffect, useState } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { Container } from "react-bootstrap";

const NavbarComponent = () => {
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
      <Container>{isMobile ? <Mobile /> : <Desktop />}</Container>
    </>
  );
};

export default NavbarComponent;
