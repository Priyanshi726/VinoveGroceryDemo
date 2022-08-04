import {PRICE_CHANGE} from "../actions/types";

export const Prices = (num)=> {
    return {
      type:PRICE_CHANGE ,
      payload:num,

    };
  };