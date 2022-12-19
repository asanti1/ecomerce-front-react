import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useAuthStore } from "../../hooks/useAuthStore";

export const UserDropdown = () => {
  const { user } = useSelector((state) => state.auth);

  const { startLogout } = useAuthStore();

  const handleLogout = () => {
    startLogout();
    window.location.reload();
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
