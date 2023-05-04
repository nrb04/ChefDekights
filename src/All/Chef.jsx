import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";

const Chef = () => {
  const { user } = useContext(AuthContext);
  return <div>{user.displayname} his name is</div>;
};

export default Chef;
