export const THEME_TOGGLE = "THEME_TOGGLE";
export const SET_NAME = "SET_NAME";

export const theme_toggle = ()=> ({
  type: THEME_TOGGLE,
});

export const set_name = (name: string) => ({
  type: SET_NAME,
  payload: name,
});