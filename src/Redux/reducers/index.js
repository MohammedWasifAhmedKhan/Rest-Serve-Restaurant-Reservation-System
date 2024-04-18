import { combineReducers } from "redux"; // Importing combineReducers function from Redux library.

import userReducer from "./authReducer"; // Importing userReducer from authReducer file.
import waitlistReducer from "./waitListReducer"; // Importing waitlistReducer from waitListReducer file.
import tableReducer from "./tableReducer"; // Importing tableReducer from tableReducer file.

export default combineReducers({ // Combining multiple reducers into one.
    userReducer: userReducer, // Assigning userReducer to the key userReducer.
    waitlistReducer: waitlistReducer, // Assigning waitlistReducer to the key waitlistReducer.
    tableReducer: tableReducer // Assigning tableReducer to the key tableReducer.
});