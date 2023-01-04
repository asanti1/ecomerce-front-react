import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const Address = ({ address }) => {
  return (
    <>
      <Container className="d-inline-flex flex-column p-2">
        <Form>
          <Row>
            <Col md="auto" xs="5" className="user-profile-text">
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" defaultValue={address.country} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>State</Form.Label>
                <Form.Control
                  readOnly
                  type="text"
                  defaultValue={address.state}
                />
              </Form.Group>
            </Col>
            <Col md="auto" xs="5" >
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" defaultValue={address.street} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="roomNumber">
                <Form.Label>Room Number</Form.Label>
                <Form.Control type="text" defaultValue={address.roomNumber} />
              </Form.Group>
            </Col>
            <Row xs={4} className="justify-content-end">
              <Button variant="primary" type="submit" className="me-4" >
                Edit
              </Button>
              <Button variant="danger" type="submit" className="">
                Delete
              </Button>
            </Row>
          </Row>
        </Form>
      </Container>
    </>
  );
};
