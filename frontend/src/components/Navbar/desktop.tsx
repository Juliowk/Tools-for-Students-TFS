import { Container, Nav, Navbar } from "react-bootstrap";
import { IoPersonAddOutline } from "react-icons/io5";
import { TbBrandGithub, TbLogout2 } from "react-icons/tb";

const Desktop = () => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="btn fs-2">
            Tools For Students
          </Navbar.Brand>

          <Nav>
            <Nav.Link
              className="mx-2"
              href={import.meta.env.VITE_URL_PAGE_LOGIN}
              onClick={logout}
            >
              <p className="btn btn-outline-dark">
                <TbLogout2 size={30} /> Logout
              </p>
            </Nav.Link>

            <Nav.Link
              className="mx-2"
              href={import.meta.env.VITE_URL_PAGE_REGISTER}
            >
              <p className="btn btn-outline-dark">
                <IoPersonAddOutline size={30} /> Register
              </p>
            </Nav.Link>

            <Nav.Link className="mx-2" target="_blank" href={import.meta.env.VITE_URL_GITHUB}>
              <p className="btn btn-outline-dark">
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
