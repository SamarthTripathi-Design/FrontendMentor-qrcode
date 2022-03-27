import types from "./Type";

export const initialState = {
  term: null,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
      };
    default:
      return state;
  }
};

export default SearchReducer;
