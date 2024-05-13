import {
  BOOK_TABLE,
  SET_TABLELIST,
  UPDATE_TABLE,
  VACATE_TABLE,
} from '../Types';
import tableData from '../../Tables.json';
const initialState = {
  tablesList: tableData,
};
const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLELIST:
      return {
        ...state,
        tablesList: action.payload,
      };
    case BOOK_TABLE:
      let temp = state.tablesList;
      let temp2 = temp.filter(item => item.id != action.payload.id);
      let filteredItem = temp.filter(item => item.id == action.payload.id)?.[0];
      if (filteredItem) {
        filteredItem.status = 'o';
        filteredItem.start_time = Date.now();
        filteredItem.booking_time = Date.now();
        filteredItem.booking = action.payload.booking;
        let newArray = [...temp2, filteredItem].sort((a, b) => a.id - b.id);
        return {
          ...state,
          tablesList: newArray,
        };
      }
    case VACATE_TABLE:
      let tempResp = state.tablesList;
      let temp3 = tempResp.filter(item => item.id != action.payload.id);
      let filteredItems = tempResp.filter(
        item => item.id == action.payload.id,
      )?.[0];
      if (filteredItems) {
        filteredItems.status = 'f';
        filteredItems.start_time = Date.now();
        filteredItems.booking = null;
        let newArray = [...temp3, filteredItems].sort((a, b) => a.id - b.id);
        return {
          ...state,
          tablesList: newArray,
        };
      }
    case UPDATE_TABLE:
      let tempRes = action.payload;
      let newArray = [...tempRes.newItem, ...tempRes.others].sort(
        (a, b) => a.id - b.id,
      );
      return {
        ...state,
        tablesList: newArray,
      };
    default:
      return state;
  }
};
export default tableReducer;
