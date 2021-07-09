import {MEAL} from "../../Data/DummyData";
import {TOGGLE_FAV } from "../Actions/meals";
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
        default:
            return state;

    }
}
export default mealsReducer;