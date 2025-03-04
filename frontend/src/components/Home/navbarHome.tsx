import { Container, Nav, Navbar } from "react-bootstrap";
import { IoPersonAddSharp } from "react-icons/io5";
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
            <Nav.Link href={import.meta.env.VITE_URL_PAGE_REGISTER}>
              <IoPersonAddSharp size={30} /> Register
            </Nav.Link>
            <Nav.Link
              href={import.meta.env.VITE_URL_PAGE_LOGIN}
              onClick={logout}
            >
              <TbLogout2 size={30} /> Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
