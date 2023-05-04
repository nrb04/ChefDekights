import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";
import { useLoaderData } from "react-router-dom";

const Chef = () => {
  const { user } = useContext(AuthContext);
  const chefDetails = useLoaderData();
  const { bio, chefName } = chefDetails;
  console.log(chefDetails);
  return (
    <div>
      {user.email} his name is {bio} {chefName}
    </div>
  );
};

export default Chef;
