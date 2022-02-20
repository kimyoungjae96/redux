import { actionCreator } from "./reducer.js";
import * as Actions from "./action-type.js";

export const increase = actionCreator(Actions.INCREASE);
export const asyncIncrease = actionCreator(Actions.ASYNC_INCREASE);
export const decrease = actionCreator(Actions.DECREASE);
export const reset = actionCreator(Actions.RESET);
export const set = actionCreator(Actions.SET);
export const asyncRequest = actionCreator(Actions.ASYNC_REQUEST);
export const asyncResponse = actionCreator(Actions.ASYNC_RESPONSE);
