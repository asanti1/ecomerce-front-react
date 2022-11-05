import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavScrollExample = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar navbar-dark bg-dark mx-auto mb-5">
      <Container fluid>
        <Navbar.Brand href="#">Mobilier</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto d-flex flex-row mb-3 mt-3" navbarScroll>
            <Form className="d-flex" style={{ width: "50vw" }}>
              <Form.Control type="search" placeholder="Search a Furniture" className="p-2" aria-label="Search" />
              <Button variant="outline-success" className="">
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav.Link href="/test" className="d-flex justify-content-end mx-3" style={{ color: "white" }}>
        Login
      </Nav.Link>
    </Navbar>
    
  );
};
