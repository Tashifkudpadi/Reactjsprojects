import React from "react";
import classes from "./recipe.module.css";

const Recipe = (props) => {
  const calorie = props.calories.toFixed();

  return (
    <div className={classes.recipe}>
      <img src={props.image} className={classes.image}></img>
      <h1>{props.title}</h1>
      <ol className={classes.list}>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={classes.calories}>Calories: {calorie}</p>
    </div>
  );
};
export default Recipe;
