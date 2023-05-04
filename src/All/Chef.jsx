import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";
import { useLoaderData } from "react-router-dom";
import "./Chef.css";
import { Button } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import Receipe from "./racipe/Receipe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chef = () => {
  const { user } = useContext(AuthContext);
  const chefDetails = useLoaderData();
  const {
    id,
    picture,
    chefName,
    yearsOfExperience,
    numRecipes,
    likes,
    bio,
    recipes,
  } = chefDetails;
  console.log(chefDetails);
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <img src={picture} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h2 className="card-title">{chefName}</h2>
                <hr />
                <h3>Chef can cook over {numRecipes} Recipes </h3>
                <p className="text-justify" style={{ textAlign: "justify" }}>
                  {bio}
                </p>
                <div className="row">
                  <div className="col-md-9">
                    <h5 className="text-bold">
                      Chef experience over {yearsOfExperience} year.
                    </h5>
                  </div>
                  <div className="col-md-3">
                    <>
                      <FcLike size={36} /> &nbsp;{likes}
                    </>
                  </div>
                  <div>
                    {recipes.map((c) => (
                      <Receipe key={id} c={c}></Receipe>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
