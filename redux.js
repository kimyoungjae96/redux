export function createStore(reducer, middlewares = []) {
  let state;
  let handlers = [];

  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  const store = {
    dispatch,
    getState,
    subscribe,
  };

  let lastDispatch = dispatch;

  middlewares = [...middlewares].reverse();
  middlewares.forEach((middleware) => {
    lastDispatch = middleware(store)(lastDispatch);
  });

  store.dispatch = lastDispatch;

  return store;
}
