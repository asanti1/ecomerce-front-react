import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { GeneralPagination } from "../common/pagination/GeneralPagination";
import { getFurnitures } from "../store/furniture/thunks";
import { FurnitureCard } from "./FurnitureCard";

export const FurnitureGrid = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFurnitures());
  }, []);

  const { furnitures } = useSelector((state) => state.furnitures);
  return (
    <>
      <Container className="mb-5">
        <Row xs={1} md={2} lg={4}>
          {furnitures.map((furniture, id) => (
            <FurnitureCard furniture={furniture} key={id} />
          ))}
        </Row>
      </Container>
      <GeneralPagination items={1} />
    </>
  );
};
