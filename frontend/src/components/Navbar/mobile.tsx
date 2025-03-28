import { useState } from "react";
import { Collapse, Container, Nav, Navbar } from "react-bootstrap";
import { IoPersonAddOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { TbBrandGithub, TbLogout2 } from "react-icons/tb";

const Mobile = () => {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar className="py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand className="fs-2 text-center">
            Tools For Students
          </Navbar.Brand>
          <div onClick={() => setOpen(!open)}>
            <SlOptionsVertical size={25} />
          </div>
        </Container>
      </Navbar>

      <Collapse in={open}>
        <Navbar>
          <Container className="justify-content-center">
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

              {/* <Nav.Link
                className="mx-2"
              href={import.meta.env.VITE_URL_PAGE_USER_LIST}
              >
                <p className="btn btn-outline-dark">
                  <CiCircleList size={30} /> Users
                </p>
              </Nav.Link> */}

              <Nav.Link
                className="mx-2"
                target="_blank"
                href={import.meta.env.VITE_URL_GITHUB}
              >
                <p className="btn btn-outline-dark">
                  <TbBrandGithub size={30} /> GitHub
                </p>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Collapse>
    </>
  );
};

export default Mobile;
