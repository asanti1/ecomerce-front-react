import { memo } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AuthHandler } from "../../auth/AuthHandler";
import "../../index.css";
import { UserDropdown } from "../../user/UserDropdown";

export const NavBar = memo(() => {
  const { status } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        className="nav navbar navbar-dark mx-auto"
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            Mobilier
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto d-flex flex-row mb-3 mt-3" navbarScroll>
              <Form className="d-flex" style={{ width: "50vw" }}>
                <Form.Control
                  type="search"
                  placeholder="Search a Furniture"
                  className="p-2"
                  aria-label="Search"
                />
                <button
                  type="button"
                  className="btn btn-outline-success nav-search-button"
                >
                  Search
                </button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {status == "authenticated" ? <UserDropdown /> : <AuthHandler />}
      </Navbar>
    </>
  );
});
