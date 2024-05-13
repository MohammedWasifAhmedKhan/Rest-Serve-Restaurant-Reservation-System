import {ADD_TO_WAITLIST, SET_WAITLIST} from '../Types';

export const setWaitlist = data => {
  return {
    type: SET_WAITLIST,
    payload: data,
  };
};

export const addToWaitlist = data => {
  return {
    type: ADD_TO_WAITLIST,
    payload: data,
  };
}