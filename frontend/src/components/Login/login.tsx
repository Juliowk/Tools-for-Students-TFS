import { Container} from "react-bootstrap";
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
    <Container>{isMobile ? <ContentsMobile /> : <ContentsDesktop />}</Container>
  );
}

export default LoginComponent;
