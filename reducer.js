import * as ActionType from "./action-type.js";

const initializeState = { count: 0 };

export function reducer(state = initializeState, action) {
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
    case ActionType.SET:
      return {
        ...state,
        count: action.payload,
      };

    case ActionType.ASYNC_INCREASE:
      fetch(action.payload.url)
        .then((response) => response.json())
        .then((result) => {
          return {
            ...state,
          };
        })
        .catch((err) => {
          return { ...state };
        });
    default:
      return { ...state };
  }
}

export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});
