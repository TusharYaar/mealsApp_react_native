import {MEAL} from "../../Data/DummyData";
import {TOGGLE_FAV, SET_FILTERS } from "../Actions/meals";
const initialState = {

    meals: MEAL,
    favoriteMeals: [],
    filteredMeals : MEAL,
}
const mealsReducer = (state = initialState,action) => {
    switch(action.type) {
        case TOGGLE_FAV:
            if(state.favoriteMeals.findIndex(meal => meal.id === action.mealId) >= 0)
                return {...state, favoriteMeals: state.favoriteMeals.filter(meal => meal.id !== action.mealId)};
            else {
                updatedMeals = [...state.favoriteMeals,state.meals.find(meal => meal.id === action.mealId) ];
                return {...state, favoriteMeals: updatedMeals}
            }
        case SET_FILTERS:
            filters= action.filters;
            const updatedMeals =  state.meals.filter(meal => {
                if (filters.glutanFree && !meal.isGlutanFree) return false;
                if (filters.lactosFree && !meal.isLactosFree) return false;
                if (filters.vegan && !meal.isVegan) return false;
                if (filters.vegetarian && !meal.isVegetarian) return false;
                return true;
            })
            return {...state,filteredMeals: updatedMeals};
        default:
            return state;

    }
}
export default mealsReducer;