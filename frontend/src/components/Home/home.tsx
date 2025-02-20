import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HomeDesktop from "./desktop";
import HomeMobile from "./mobile";

const HomeComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Container>{isMobile ? <HomeMobile /> : <HomeDesktop />}</Container>;
};

export default HomeComponent;
