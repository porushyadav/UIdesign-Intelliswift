import {
  FETCH_DATA,
  ADD_DATA,
  DELETE_DATA,
  LOADING,
} from "../actions/actionTypes";
const intializeState = {
  products: [],
  loading: true,
};

export default function (state = intializeState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    case ADD_DATA:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case DELETE_DATA:
      const filter = state.products.filter((product) => {
        return product.id !== action.product.id;
      });
      return {
        ...state,
        products: filter,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
