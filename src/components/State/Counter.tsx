import React, { useReducer, useState } from "react";

interface CounterState {
  counter: number;
}
const initCounter = { counter: 0 };

interface UpdateAction {
  type: "++" | "--";
  payload: number;
}

interface ResetAction {
  type: "reset";
}

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "++":
      return { counter: state.counter + action.payload };
    case "--":
      return { counter: state.counter - action.payload };
    case "reset":
      return initCounter;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initCounter);
  return (
    <div>
      Count: {state.counter}
      <button onClick={() => dispatch({ type: "++", payload: 10 })}>+10</button>
      <button onClick={() => dispatch({ type: "--", payload: 10 })}>-10</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
