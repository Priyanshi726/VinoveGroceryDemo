import {INCREMENT_COUNT, DECREMENT_COUNT, PRICE_CHANGE} from '../actions/types';

export const INITIAL_STATE = {
  count: 1,
  // item: []
};

const countReducer = (state = INITIAL_STATE, {type}) => {
  switch (type) {
    // case INCREMENT_COUNT:
    //   return {
    //     // ...state,
    //     updatedCart: state.item.map((curElem) => {
    //       if (curElem.id === payload) {
    //         return {...state, quantity: curElem.quantity + 1};
    //       }
    //       return curElem;
    //     }),
    //     // count: state.count + 1,
    //   };
    // case DECREMENT_COUNT:
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };
    case PRICE_CHANGE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
