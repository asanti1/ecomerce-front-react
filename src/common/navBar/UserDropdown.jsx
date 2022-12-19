import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../hooks/useAuthStore";

export const UserDropdown = () => {
  const { user } = useSelector((state) => state.auth);

  const { startLogout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    startLogout();
    navigate("/");
  };

  return (
    <DropdownButton
      title={`Hello ${user.firstName}`}
      className="me-4"
      variant="success"
    >
      <Dropdown.Item> Profile </Dropdown.Item>
      {user?.roles.includes("Admin") ? (
        <Dropdown.Item> Administration </Dropdown.Item>
      ) : null}
      <Dropdown.Item onClick={handleLogout}> Logout </Dropdown.Item>
    </DropdownButton>
  );
};
