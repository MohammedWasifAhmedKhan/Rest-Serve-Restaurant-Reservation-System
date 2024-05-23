// [1] Importing combineReducers function from Redux library.
import { combineReducers } from "redux"; 
// Importing userReducer from authReducer file.
import userReducer from "./authReducer"; 
// Importing waitlistReducer from waitListReducer file.
import waitlistReducer from "./waitListReducer"; 
// Importing tableReducer from tableReducer file.
import tableReducer from "./tableReducer"; 
// [1] Combining multiple reducers into one.
export default combineReducers({ 
    // Assigning userReducer to the key userReducer.
    userReducer: userReducer, 
    // Assigning waitlistReducer to the key waitlistReducer.
    waitlistReducer: waitlistReducer, 
    // Assigning tableReducer to the key tableReducer.
    tableReducer: tableReducer 
});

// REFERENCES:
// [1] 	"combineReducers | Redux" ReduxJS. Accessed: Apr. 18, 2024. [Online]. Available: https://redux.js.org/api/combinereducers
