/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";

const Receipe = ({ c }) => {
  const { name, ingredients, rating, cooking_method } = c;
  return (
    <div>
      <h2>{name}</h2>
      {ingredients.map((i) => (
        <li>{i}</li>
      ))}
      <p>{cooking_method}</p>
    </div>
  );
};

export default Receipe;
