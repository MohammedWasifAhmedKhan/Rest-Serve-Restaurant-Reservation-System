import {BOOK_TABLE, SET_TABLELIST, SET_USER, VACATE_TABLE} from '../Types'; // Importing action types from Types file.
import tableData from '../../Tables.json'; // Importing initial table data from Tables.json file.

const initialState = { // Defining initial state for the table reducer.
  tablesList: tableData, // Assigning initial table data to the tablesList property.
};

const tableReducer = (state = initialState, action) => { // Defining the table reducer function.
  switch (action.type) { // Implementing a switch statement to handle different action types.
    case SET_TABLELIST: // Handling the SET_TABLELIST action type.
      return { // Returning a new state object.
        ...state, // Copying the existing state.
        tablesList: action.payload, // Updating the tablesList property with the new data.
      };
    case BOOK_TABLE: // Handling the BOOK_TABLE action type.
      let temp = state.tablesList; // Creating a temporary variable to store the current table data.
      let temp2 = temp.filter(item => item.id != action.payload.id); // Filtering out the table with the booked id.
      let filteredItem = temp.filter(item => item.id == action.payload.id)?.[0]; // Getting the booked table.
      if (filteredItem) { // Checking if the booked table exists.
        filteredItem.status = 'o'; // Updating the status to 'occupied'.
        filteredItem.start_time = Date.now(); // Setting the start time of the booking.
        filteredItem.booking = action.payload.booking; // Assigning the booking information.
        let newArray = [...temp2, filteredItem].sort((a, b) => a.id - b.id); // Creating a new array with the updated table data.
        return { // Returning the new state object.
          ...state, // Copying the existing state.
          tablesList: newArray, // Updating the tablesList property with the new array.
        };
      }
    case VACATE_TABLE: // Handling the VACATE_TABLE action type.
      let tempResp = state.tablesList; // Creating a temporary variable to store the current table data.
      let temp3 = tempResp.filter(item => item.id != action.payload.id); // Filtering out the table to be vacated.
      let filteredItems = tempResp.filter(item => item.id == action.payload.id)?.[0]; // Getting the table to be vacated.
      if (filteredItems) { // Checking if the table to be vacated exists.
        filteredItems.status = 'f'; // Updating the status to 'free'.
        filteredItems.start_time = Date.now(); // Setting the start time of the vacated table.
        filteredItems.booking = null; // Removing the booking information.
        let newArray = [...temp3, filteredItems].sort((a, b) => a.id - b.id); // Creating a new array with the updated table data.
        return { // Returning the new state object.
          ...state, // Copying the existing state.
          tablesList: newArray, // Updating the tablesList property with the new array.
        };
      }
    default: // Handling the default case.
      return state; // Returning the existing state.
  }
};

export default tableReducer; // Exporting the table reducer function.
