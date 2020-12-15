import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispath] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispath(e.target);
  };
  return [state, onChange];
}
