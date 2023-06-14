import { useState } from "react";
import { StyledButton } from "./styles"
import { Link } from "react-router-dom";

const Private = () => {
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogOut = () => {
    setLoggedIn(false);
    console.log(loggedIn);

  }

  return (
    <div>
      Private
      <StyledButton onClick={handleLogOut}>
        Logout
      </StyledButton>
      {<Link to='/signup' />}
    </div>

  )
}

export default Private;