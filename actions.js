import { actionCreator } from "./reducer.js";
import * as Actions from "./action-type.js";

export const increase = actionCreator(Actions.INCREASE);
export const decrease = actionCreator(Actions.DECREASE);
export const reset = actionCreator(Actions.RESET);
export const set = actionCreator(Actions.SET);
