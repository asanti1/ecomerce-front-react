import { Card, Col } from "react-bootstrap";

export const FurnitureCard = ({ furniture, id }) => {
  return (
    <>
      <Col>
        <Card key={id}>
          <Card.Img variant="top" src="src/assets/test.jpeg" />
          <Card.Body>
            <Card.Title>{furniture.name}</Card.Title>
            <Card.Text className="card-text">{furniture.description}</Card.Text>
            <Card.Footer>
              <ul>
                <div className="card-footer">
                  <li >{`Cost: ${furniture.cost}`}</li>
                  <li >{`Stock: ${furniture.stock}`}</li>
                </div>
              </ul>
            </Card.Footer>
            <Card.Link>
              <button
                type="button"
                className="btn btn-outline-success btn-sm nav-search-button"
              >
                See More
              </button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
