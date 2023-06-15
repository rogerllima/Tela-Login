import { useState } from "react";
import { StyledButton } from "./styles"
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const Private = () => {
  const auth = useAuthContext();

  const handleLogOut = () => {
    auth.setLoggedIn(false);
    localStorage.removeItem('logged');
  }

  return (
    <div>
      Private
      <NavLink to="/home">
        <StyledButton onClick={handleLogOut}>
          Logout
        </StyledButton>
      </NavLink>
    </div>

  )
}

export default Private;