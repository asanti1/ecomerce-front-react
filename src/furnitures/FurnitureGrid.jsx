import { Pagination } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const FurnitureGrid = () => {
  return (
    <>
      <Container className="mb-5">
        <Row xs={1} md={2} lg={4}>
          {Array.from({ length: 15 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="src/assets/test.jpeg" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
