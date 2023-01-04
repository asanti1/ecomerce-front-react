import { Col, Container, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export const UserMenu = ({ active }) => {
  const navigate = useNavigate();

  return (
    <>
      <Container fluid xl={3} sm={1}>
        <Nav>
          <Nav.Link
            onClick={() => {
              navigate("/profile");
            }}
            className={active ? `white-text ` : ``}
          >
            <strong>Your Profile</strong>
          </Nav.Link>

          <Nav.Link
            onClick={() => {
              navigate("/profile/address");
            }}
            className={!active ? `white-text ` : ``}
          >
            <strong>Your address(es)</strong>
          </Nav.Link>
          <hr />
        </Nav>
      </Container>
    </>
  );
};
