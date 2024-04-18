import { SET_USER } from "../Types"; // Importing action type.

const initialState = {
  user: '', // Initializing user state.
};

// Reducer function for user data.
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state, // Spread operator to maintain immutability.
        user: action.payload, // Updating user state with payload data.
      };
    default:
      return state; // Returning current state for other actions.
  }
};

export default userReducer; // Exporting userReducer function.
