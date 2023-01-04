import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login, modifyUserById } from "../api/mobilierAPI";
import { NavBar } from "../common/navBar/NavBar";
import { userInit } from "../store/user/thunks";
import { UserLogoutModal } from "./UserLogoutModal";
import { UserMenu } from "./UserMenu";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const { status, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [logOut, setLogOut] = useState(false);

  const values = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    password: undefined,
  };

  useEffect(() => {
    if (status !== "authenticated") navigate("/");
  });

  useEffect(() => {
    dispatch(userInit(user));
  });

  const onSubmit = async (
    { phone, password, newPassword1, newPassword2 },
    event
  ) => {
    if (values.phone === phone && password === "") return;
    event.preventDefault();
    values.phone = phone;
    if (passwordCheck(password, newPassword1, newPassword2)) {
      values.password = newPassword1;
      if ((await login(values.email, password)) === 201) {
        setLogOut((logOut) => !logOut);
        await modifyUserById(user.id, values);
      }
    } else {
      await modifyUserById(user.id, values);
      setLogOut((logOut) => !logOut);
    }
  };

  const passwordCheck = (password, newPassword1, newPassword2) =>
    password !== "" &&
    newPassword1.length >= 1 &&
    newPassword1 === newPassword2;
  return (
    <>
      <NavBar />
      <UserMenu active={true} />
      <Container className="d-inline-flex">
        <Form className="" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md="auto" xs="5" className="user-profile-text">
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.firstName}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  readOnly
                  type="email"
                  defaultValue={user.email}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col md="auto" xs="5" className="user-profile-text">
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.lastName}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.phone}
                  {...register("phone")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Edit Profile
          </Button>
        </Form>

        <Col md="auto" xs="5" className="user-profile-text ms-3 ">
          <strong className="ms-5 mt-3 mb-5">Password change</strong>
          <Row className="ms-3 mt-4">
            <Form
              className="user-profile-text"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Group className="mb-3" controlId="actualPassword">
                <Form.Label>Actual Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Your actual password here"
                  {...register("password")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="newPassword1">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="The new password here"
                  {...register("newPassword1")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="newPassword2">
                <Form.Label>Repeat new password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repeat your new password"
                  {...register("newPassword2")}
                />
              </Form.Group>
            </Form>
          </Row>
        </Col>
        {logOut ? <UserLogoutModal /> : null}
      </Container>
    </>
  );
};
