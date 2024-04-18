import {BOOK_TABLE, SET_TABLELIST, VACATE_TABLE} from '../Types'; // Importing action types.

// Function to create an action to set table list.
export const setTableList = data => {
  return {
    type: SET_TABLELIST, // Action type to set table list.
    payload: data, // Data payload to be dispatched.
  };
};

// Function to create an action to book a table.
export const bookTable = data => {
  return {
    type: BOOK_TABLE, // Action type to book a table.
    payload: data, // Data payload to be dispatched.
  };
}

// Function to create an action to vacate a table.
export const vacateTable = data => {
  return {
    type: VACATE_TABLE, // Action type to vacate a table.
    payload: data // Data payload to be dispatched.
  }
}
