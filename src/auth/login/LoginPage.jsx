import { Button, Col, Form, Modal, Row } from "react-bootstrap/";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../hooks/useAuthStore";

export const LoginPage = ({
  loginModal,
  switchLoginOrRegister,
  handleHide,
}) => {
  const { handleSubmit, register } = useForm();
  const { startLogin } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    event.preventDefault();
    startLogin(data);
    navigate("/login");
  };

  return (
    <Modal show={loginModal} onHide={handleHide} centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="ms-2 me-2 mt-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3 ms-2 me-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />
        </Form.Group>

        <Row className="mx-3 mb-1">
          <Col>
            <Button
              as="input"
              variant="primary"
              type="submit"
              value="Login"
              className="mb-1"
            />
          </Col>
          <Col>
            <Button className="mb-1" onClick={switchLoginOrRegister}>
              No account? Register!
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
