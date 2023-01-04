import { useEffect } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavBar } from "../common/navBar/NavBar";
import { Address } from "./Address";
import { UserMenu } from "./UserMenu";

export const UserAdresses = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (status !== "authenticated") navigate("/");
  });

  const { status, user } = useSelector((state) => state.auth);

  return (
    <>
      <NavBar />
      <UserMenu active={false} />
      <Container className="d-inline-flex flex-column p-2">
        {user.address?.map((address, id) => (
          <Address key={id} address={address} />
        ))}
      </Container>
      <div>
        <Button variant="primary" type="button" className="me-2">
          Add a new address
        </Button>
      </div>
    </>
  );
};
