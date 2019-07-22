import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store from "../../store";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ recipes: store.getState().recipes });
    });
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          index={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.first_name}
          authorLast={recipe.last_name}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
