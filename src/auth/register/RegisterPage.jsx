import { Button, Col, Form, Modal, Row } from "react-bootstrap/";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../hooks/useAuthStore";
import "./styles.css";

export const RegisterPage = ({
  registerModal,
  switchLoginOrRegister,
  handleHide,
}) => {
  const { handleSubmit, register } = useForm();

  const { startRegister } = useAuthStore();

  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    event.preventDefault();
    startRegister(data);
    navigate("/register");
  };

  return (
    <Modal show={registerModal} onHide={handleHide} centered>
      <Form onSubmit={handleSubmit(onSubmit)} className="register-modal">
        <Row>
          <Form.Group as={Col} className="register-modal-field" controlId="firstName">
            <Form.Label as="strong">First Name (*)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              required
              {...register("firstName")}
            />
          </Form.Group>

          <Form.Group as={Col} className="register-modal-field" controlId="lastName">
            <Form.Label as="strong">Last Name (*)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              required
              {...register("lastName")}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="register-modal-field" controlId="phone">
            <Form.Label>Your Phone (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone"
              {...register("phone")}
            />
          </Form.Group>

          <Form.Group as={Col} className="register-modal-field" controlId="email">
            <Form.Label as="strong">Your email (*)</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              {...register("email")}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="register-modal-field" controlId="password">
            <Form.Label as="strong">Password (*)</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              required
              {...register("password")}
            />
          </Form.Group>

          <Form.Group as={Col} className="register-modal-field" controlId="password">
            <Form.Label as="strong">Confirm Password (*)</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              required
              {...register("password2")}
            />
          </Form.Group>
        </Row>

        <hr className="styled-hr" />
        <h6 className="ms-2">
          Billing Address (Optional but you will need to fill it for a purchase)
        </h6>

        <Row>
          <Form.Group as={Col} className="register-modal-field" controlId="country">
            <Form.Label>Country </Form.Label>
            <Form.Select as={Col} {...register("country")}>
              <option value="Argentina">Argentina</option>
              <option value="Brasil">Brasil</option>
              <option value="Brasil">Chile</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className="register-modal-field" controlId="state">
            <Form.Label>State </Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              {...register("state")}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="register-modal-field" controlId="city">
            <Form.Label>City </Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              {...register("city")}
            />
          </Form.Group>

          <Form.Group as={Col} className="register-modal-field" controlId="street">
            <Form.Label>Street </Form.Label>
            <Form.Control
              type="text"
              placeholder="Street"
              {...register("street")}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            className="register-modal-field"
            controlId="roomNumber"
          >
            <Form.Label>Room Number </Form.Label>
            <Form.Control
              type="text"
              placeholder="Room number"
              {...register("roomNumber")}
            />
          </Form.Group>
        </Row>

        <Row className="mx-3 mb-1">
          <Col>
            <Button
              as="input"
              variant="primary"
              type="submit"
              value="Register"
              className="ms-2 mb-2"
            />
          </Col>
          <Col>
            <Button
              className="d-flex justify-content-end mx-3"
              onClick={switchLoginOrRegister}
            >
              Have account? Login!
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
