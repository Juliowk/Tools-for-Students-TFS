import { Container, Nav, Navbar } from "react-bootstrap";
import { TbLogout2 } from "react-icons/tb";

const NavbarHome = () => {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <>
      <Navbar>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link onClick={logout} href="/">
              <TbLogout2 size={30} /> Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
