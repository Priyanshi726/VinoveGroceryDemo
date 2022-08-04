import {  PRICE_CHANGE } from "../actions/types";

export const INITIAL_STATE = {
  PricingCount: 1,
};


const priceReducer = (state = INITIAL_STATE, { type ,payload }) => {
  switch (type) {
      case PRICE_CHANGE:
      return {
        ...state,
        PricingCount: (state.PricingCount+1) + payload,
      };
    default:
      return state;
  }
};

export default priceReducer;
