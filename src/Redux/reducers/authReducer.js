// Importing action type.
import { SET_USER } from "../Types"; 
const initialState = {
  // Initializing user state.
  user: '', 
};

// Reducer function for user data.
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        // Spread operator to maintain immutability.
        ...state, 
        // Updating user state with payload data.
        user: action.payload, 
      };
    default:
      // Returning current state for other actions.
      return state; 
  }
};
// Exporting userReducer function.
export default userReducer; 
