import { INCREMENT_COUNT, DECREMENT_COUNT,PRICE_CHANGE} from "../actions/types";

export const increment = (id) => {
  return {
    type: INCREMENT_COUNT,
    payload:id,
  };
};

export const decrement = (id) => {
  return {
    type: DECREMENT_COUNT,
    payload:id,
  };
};

