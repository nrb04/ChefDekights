import React from "react";
import { FcLike } from "react-icons/fc";

// eslint-disable-next-line react/prop-types
const ChefCard = ({ card }) => {
  // eslint-disable-next-line react/prop-types
  const { picture, chefName, yearsOfExperience, numRecipes, likes, bio } = card;
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
