import { THEME_TOGGLE, SET_NAME } from "./Action";

interface action {
  type: string;
  payload: any;
}

const initial_state = {
  isDark: false,
  name: "",
}

export const reducer = (state = initial_state, action: action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return {...state, isDark: !state.isDark};
    case SET_NAME:
      return {...state, name: action.payload};
    default:
      return state;
  }
}