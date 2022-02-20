import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import { logger } from "./logger.js";
import * as Actions from "./actions.js";
import { ASYNC_INCREASE } from "./action-type.js";

const asyncRouter = (jobs) => (store) => (next) => (action) => {
  const matchJob = Object.entries(jobs).find(([type]) => action.type === type);
  if (matchJob) {
    console.log("hihi", matchJob);
    matchJob[1](store, action);
  } else {
    next(action);
  }
};

const asyncJobs = {
  [ASYNC_INCREASE]: (store, action) => {
    store.dispatch(Actions.asyncRequest());
    setTimeout(() => {
      store.dispatch(Actions.increase(20));
      store.dispatch(Actions.asyncResponse());
    }, 3000);
  },
};

const store = createStore(reducer, [logger, asyncRouter(asyncJobs)]);

const counterDisplay = document.querySelector("#counter");
const btnIncrease = document.querySelector("#btn-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnReset = document.querySelector("#btn-reset");
const loadingMessage = document.querySelector("#loading");

store.subscribe(function () {
  const { count, request } = store.getState();

  loadingMessage.style.visibility = request ? "visible" : "hidden";
  counterDisplay.textContent = count;
});

store.dispatch(Actions.set(0));

btnReset.addEventListener("click", () => {
  store.dispatch(Actions.reset());
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(Actions.decrease());
});

btnIncrease.addEventListener("click", () => {
  store.dispatch(Actions.increase());
});

btnAsyncIncrease.addEventListener("click", () => {
  store.dispatch(Actions.asyncIncrease({ url: "/async-increase" }));
});
