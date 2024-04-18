import { SET_WAITLIST } from "../Types"; // Importing action type SET_WAITLIST from Types file.

const initialState = { // Defining initial state for the waitlist reducer.
  waitList: [], // Initializing waitList property as an empty array.
};

const waitlistReducer = (state = initialState, action) => { // Defining the waitlist reducer function.
  switch (action.type) { // Implementing a switch statement to handle different action types.
    case SET_WAITLIST: // Handling the SET_WAITLIST action type.
      return { // Returning a new state object.
        ...state, // Copying the existing state.
        waitList: action.payload, // Updating the waitList property with the new data.
      };
    default: // Handling the default case.
      return state; // Returning the existing state.
  }
};

export default waitlistReducer; // Exporting the waitlist reducer function.
