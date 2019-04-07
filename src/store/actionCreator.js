import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST } from "./actionTypes";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const getInputAddAction = () => ({
  type: ADD_LIST
});
export const deleteAction = (index) => ({
  type: DELETE_LIST,
  index
});
