import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import { logger } from "./logger.js";
import * as Actions from "./actions.js";

const store = createStore(reducer, [logger]);

const counterDisplay = document.querySelector("#counter");
const btnIncrease = document.querySelector("#btn-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnReset = document.querySelector("#btn-reset");

store.subscribe(function () {
  const { count } = store.getState();

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
