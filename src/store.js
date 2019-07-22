import { createStore } from "redux";

const initialState = {
  name: "",
  category: "",
  first_name: "",
  last_name: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const UPDATE_RECIPES = "UPDATE_RECIPES";
export const CLEAR_FORM = "CLEAR_FORM";
export const DELETE_RECIPE = "DELETE_RECIPE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload };
    case UPDATE_FIRST_NAME:
      return { ...state, first_name: action.payload };
    case UPDATE_LAST_NAME:
      return { ...state, last_name: action.payload };
    case UPDATE_INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case UPDATE_INSTRUCTIONS:
      return {
        ...state,
        instructions: [...state.instructions, action.payload]
      };
    case UPDATE_RECIPES:
      const {
        name,
        category,
        first_name,
        last_name,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        first_name,
        last_name,
        ingredients,
        instructions
      };
      return { ...state, recipes: [...state.recipes, recipe] };
    case CLEAR_FORM:
      return {
        name: "",
        category: "",
        first_name: "",
        last_name: "",
        ingredients: [],
        instructions: [],
        recipes: [...state.recipes]
      };
    case DELETE_RECIPE:
      let newState = { ...state };
      newState.recipes.splice(action.payload, 1);
      return { newState };
    default:
      return state;
  }
}

export default createStore(reducer);
