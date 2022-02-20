import * as ActionType from "./action-type.js";

const initializeState = { count: 0 };

export function reducer(state = initializeState, action) {
  console.log("a", action.type);
  switch (action.type) {
    case ActionType.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionType.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionType.RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return { ...state };
  }
}

export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});
