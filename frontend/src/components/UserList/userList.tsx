import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavbarHome from "../Navbar/navbarHome";
import Mobile from "./mobile";
import Desktop from "./desktop";

const UserListComponent = () => {
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
          <NavbarHome />
          <Mobile />
        </>
      ) : (
        <>
          <NavbarHome />
          <Desktop />
        </>
      )}
    </Container>
  );
};

export default UserListComponent;
