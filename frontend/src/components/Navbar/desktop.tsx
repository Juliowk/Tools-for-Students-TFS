import { Container, Nav, Navbar } from "react-bootstrap";
import { IoPersonAddOutline } from "react-icons/io5";
import { TbBrandGithub, TbLogout2 } from "react-icons/tb";

const Desktop = () => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar expand="lg" className="align-items-center">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Navbar.Brand href="/" className="fs-2">
            Tools For Students
          </Navbar.Brand>

          <Nav className="d-flex align-items-center gap-2">
            <Nav.Link
              href={import.meta.env.VITE_URL_PAGE_LOGIN}
              onClick={logout}
            >
              <p className="btn btn-outline-dark m-0 d-flex align-items-center gap-1">
                <TbLogout2 size={30} /> Logout
              </p>
            </Nav.Link>

            <Nav.Link href={import.meta.env.VITE_URL_PAGE_REGISTER}>
              <p className="btn btn-outline-dark m-0 d-flex align-items-center gap-1">
                <IoPersonAddOutline size={30} /> Register
              </p>
            </Nav.Link>

            <Nav.Link target="_blank" href={import.meta.env.VITE_URL_GITHUB}>
              <p className="btn btn-outline-dark m-0 d-flex align-items-center gap-1">
                <TbBrandGithub size={30} /> GitHub
              </p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Desktop;
