import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/slices/hooks";
import { question } from "../../../../helpers/functions/swal";
import {logout} from "../../../../store/slices/auth-slice"
import { encryptedLocalStorage } from "../../../../helpers/functions/encrypt-storage";


const UserMenu = () => {
  const { isUserLogin, user } = useAppSelector((state) => state.auth);
  const dispatch=useAppDispatch();
  const navigate=useNavigate();
  const handleLogout = () => {
    question("Logout", "Are you sure to logout?").then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        encryptedLocalStorage.removeItem("token");
        navigate("/");
      }
    });
  };
  return (
    <div className="user-menu d-flex">
      {isUserLogin ? (
        <Dropdown align="end">
          <Dropdown.Toggle variant="primary">
            {user.firstName} {user.lastName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {user.roles.includes("Administrator") && (
              <>
                {" "}
                <Dropdown.Item as={Link} to="/admin">
                  Admin Panel
                </Dropdown.Item>
                <Dropdown.Divider />
              </>
            )}

            <Dropdown.Item as={Link} to="/user">
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/user/reservations">
              Reservations
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <>
          <Button className="mx-2" variant="primary" as={Link} to="/auth?key=login">
            Login
          </Button>
          <Button variant="secondary" as={Link} to="/auth?key=register">
            Register
          </Button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
