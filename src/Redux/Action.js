import types from "./Type";

export const searchItems = (input) => ({
  type: types.SET_SEARCH_TERM,
  payload: input,
});
