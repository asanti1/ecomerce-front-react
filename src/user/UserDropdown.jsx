import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAuthStore } from "../hooks/useAuthStore";

export const UserDropdown = () => {
  const { user } = useSelector((state) => state.auth);

  const { startLogout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    startLogout();
    navigate("/");
  };

  return (
    <>
      <Dropdown className="user-dropdown-button-toggler">
        <Dropdown.Toggle variant="success" className="user-dropdown">
          {`Hello, ${user.firstName}`}
        </Dropdown.Toggle>
        <Dropdown.Menu className="user-dropdown">
          <Dropdown.Item
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Dropdown.Item>
          {user?.roles.includes("Admin") ? (
            <Dropdown.Item>Administration</Dropdown.Item>
          ) : null}
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
