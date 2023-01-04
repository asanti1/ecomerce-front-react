import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useAuthStore } from "../hooks/useAuthStore";

export const UserLogoutModal = () => {
  const { startLogout } = useAuthStore();
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow((show) => !show);
  };

  useEffect(() => {
    setTimeout(() => {
      startLogout();
    }, 2000);
  }, []);

  return (
    <Modal show={show} centered onHide={toggleShow}>
      <Modal.Dialog>
        Changes applied, you will be logged out in 2 seconds
      </Modal.Dialog>
    </Modal>
  );
};
