import {ADD_TO_WAITLIST, SET_WAITLIST} from '../Types';

const initialState = {
  waitList: [],
};
const waitlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAITLIST:
      return {
        ...state,
        waitList: action.payload,
      };
    case ADD_TO_WAITLIST:
      let temp = state.waitList;
      let newArr = [...temp, action.payload];
      return {
        ...state,
        waitList: newArr,
      };
    default:
      return state;
  }
};
export default waitlistReducer;
