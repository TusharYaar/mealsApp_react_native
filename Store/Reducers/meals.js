import {MEAL} from "../../Data/DummyData";
const initialState = {
    meals: MEAL,
    favoritesMeals: [],
    filteredMeals : MEAL,
}
const mealsReducer = (state = initialState,action) => {
    return state;
}
export default mealsReducer;