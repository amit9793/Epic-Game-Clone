import { ADD_TODO } from "./actionType";

const init = 0;

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        init: payload,
      };
    default:
      return state;
  }
};
