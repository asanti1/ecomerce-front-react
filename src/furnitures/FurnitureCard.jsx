import { Card, Col } from "react-bootstrap";

export const FurnitureCard = ({ furniture, id }) => {
  return (
    <>
      <Col>
        <Card key={id}>
          <Card.Img variant="top" src="src/assets/test.jpeg" />
          <Card.Body>
            <Card.Title>{furniture.name}</Card.Title>
            <Card.Text>{furniture.description}</Card.Text>
            <Card.Footer>
              <ul>
                <li>{`Cost: ${furniture.cost}`}</li>
                <li>{`Stock: ${furniture.stock}`}</li>
                <li>{`DepthZ: ${furniture.depthZ}`}</li>
                <li>{`HeightX: ${furniture.heightX}`}</li>
                <li>{`WidthY: ${furniture.widthY}`}</li>
                <li>{`Wood: ${furniture.wood}`}</li>
              </ul>
            </Card.Footer>
            <Card.Link> Comprar...</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
