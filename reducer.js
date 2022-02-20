import * as ActionType from "./action-type.js";

const initializeState = { count: 0, request: false };

export function reducer(state = initializeState, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      if (action.payload) {
        return {
          ...state,
          count: state.count + action.payload,
        };
      } else {
        return {
          ...state,
          count: state.count + 1,
        };
      }
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
    case ActionType.SET:
      return {
        ...state,
        count: action.payload,
      };

    case ActionType.ASYNC_REQUEST:
      return {
        ...state,
        request: true,
      };
    case ActionType.ASYNC_RESPONSE:
      return {
        ...state,
        request: false,
      };
    default:
      return { ...state };
  }
}

export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});
