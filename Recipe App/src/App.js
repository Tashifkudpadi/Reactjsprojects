import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

const APP_ID = "d16dd60a";
const APP_KEY = "889b8c63af6d32632b305d28ee85a95a";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={formSubmitHandler} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={searchInputHandler}
          placeholder="Search for a recipe"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
