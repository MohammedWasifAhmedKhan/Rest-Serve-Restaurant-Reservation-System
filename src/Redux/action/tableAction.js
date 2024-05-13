import {BOOK_TABLE, SET_TABLELIST, UPDATE_TABLE, VACATE_TABLE} from '../Types';

export const setTableList = data => {
  return {
    type: SET_TABLELIST,
    payload: data,
  };
};
export const bookTable = data => {
  return {
    type: BOOK_TABLE,
    payload: data,
  };
};
export const vacateTable = data => {
  return {
    type: VACATE_TABLE,
    payload: data,
  };
};
export const updateTable = data => {
  return {
    type: UPDATE_TABLE,
    payload: data,
  };
};
