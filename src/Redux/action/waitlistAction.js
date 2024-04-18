import {SET_WAITLIST} from '../Types'; // Importing action type.

// Function to create an action to set waitlist data.
export const setWaitlist = data => {
  return {
    type: SET_WAITLIST, // Action type to set waitlist data.
    payload: data, // Data payload to be dispatched.
  };
};
