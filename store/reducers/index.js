import { combineReducers } from "@reduxjs/toolkit";

import groceryReducer from "./groceryreducer";
import flagsReducer from "./flagsreducer";
import countReducer from "./countreducer";
import priceReducer from "./priceReducer";

const reducer = combineReducers({
  groceryReducers: groceryReducer,
  countReducer: countReducer,
  flagsState: flagsReducer,
  priceReducer:priceReducer
});

export default reducer;
