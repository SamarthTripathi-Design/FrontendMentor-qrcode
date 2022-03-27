import { createStore } from "redux";
import SearchReducer from "./SearchReducer";

export const store = createStore(SearchReducer);

export default store;
