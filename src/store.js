import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { inventoryReducer } from "./inventoryReducer";

export const store=createStore(inventoryReducer,applyMiddleware(thunk));