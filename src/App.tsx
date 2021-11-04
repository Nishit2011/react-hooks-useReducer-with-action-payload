import React, { useReducer } from "react";
import "./styles.css";

type CounterState = {
  firstCounter: number;
};

type IncDecPayload = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetPayload = {
  type: "reset";
};

type CounterPayload = IncDecPayload | ResetPayload;

const initialState = {
  firstCounter: 0
};

const reducer = (state: CounterState, action: CounterPayload) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.payload };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <p>{count.firstCounter}</p>
    </div>
  );
}
