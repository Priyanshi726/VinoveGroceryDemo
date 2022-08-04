import {getActionFromState} from '@react-navigation/native';
import {State} from 'react-native-gesture-handler';
import {
  ADD_TO_CART,
  ADD_GROCERY_ITEM,
  CLEAR_FROM_CART,
  REMOVE_FROM_CART,
  REMOVE_GROCERY_ITEM,
  SET_FAVOURITE,
  REMOVE_FAVOURITE,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from '../actions/types';

export const INITIAL_STATE = {
  amount: 1,
  cart:[],
  groceryItems: [],
  Favourites: [],
};

const groceryReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ADD_GROCERY_ITEM:
      // console.log('weeeeeeeeee========>',payload)
      return {
        ...state,
        groceryItems: state.groceryItems.concat({
          key: Math.random(),

          ...payload,
        }),
      };
    case REMOVE_GROCERY_ITEM:
      return {
        ...state,
        groceryItems: state.groceryItems.filter(item => item.id !== payload),
      };
    case ADD_TO_CART:
      // console.log('weeeeeeeeee========>',payload)
      const newCart = [...state.groceryItems];
    const item = 
    newCart.find(x=>x.id===payload.id);
    if(item)
    {
      item.amount++;
    }
    else{
      newCart.push(payload)
    }
    return {
      ...state,
      groceryItems:newCart,
      total:state.total+1
    }
    case CLEAR_FROM_CART:
      const newCart3 = {...state.groceryItems};
      if (newCart3[payload]) {
        newCart3[payload.id] = 0;
      }
      return {
        
        ...state,
        groceryItems: [],
      };
    case SET_FAVOURITE:
      // console.log('weeeeeeeeee========>',payload)
      return {
        ...state,
        Favourites: state.Favourites.concat({
          key: Math.random(),
                                          
          ...payload,
        }),
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        Favourites: state.Favourites.filter(item => item.key !== payload),
      };
    case INCREMENT_COUNT:
      
      return {
        ...state,

        groceryItems: state.groceryItems.map(item => {
          if (item.id === payload) {
            return {...item, amount: item.amount + 1};
          } else {
            return item;
          }
        }),
       
      };
    case DECREMENT_COUNT:
      return {
        ...state,

        groceryItems: state.groceryItems.map(item => {
          if (item.id === payload) {
            return {...item, amount: item.amount - 1};
          } else {
            return item;
          }
        })
      };
    default:
      return state;
  }
};

export default groceryReducer;
