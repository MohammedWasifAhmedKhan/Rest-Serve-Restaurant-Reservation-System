// [4] Importing necessary components from React Native library.
import {FlatList, StyleSheet, Text, View} from 'react-native'; 
// [1] Importing React library and useState hook.
import React, {useState, useEffect} from 'react'; 
// Importing custom global styles.
import {GlobalStyles} from '../Global'; 
// Importing AppHeader component.
import AppHeader from '../Components/AppHeader'; 
// Importing TableItem component.
import TableItem from '../Components/TableItem'; 
// Importing BookingTableModal component.
import BookingTableModal from '../Components/BookingTableModal'; 
// Importing TableDetailsModal component.
import TableDetailsModal from '../Components/TableDetailsModal'; 
import {useDispatch, useSelector} from 'react-redux';
import {
  bookTable,
  setTableList,
  vacateTable,
} from '../Redux/action/tableAction';
import SecondaryButton from '../Components/SecondaryButton';
import auth from '@react-native-firebase/auth';
import UserActionModal from '../Components/UserActionModal';
import TableTimeReducerModal from '../Components/TableTimeReducerModal';
import AddTowWaitListModal from '../Components/AddToWaitlistModal';
// Declaring Home functional component.
export default function Home(props) { 
  // [2] using useDispatch hook to dispatch actions
  const dispatch = useDispatch(); 
  //using useSelector hook to fetch tables data from Redux store.
  const tablesDataRedux = useSelector(state => state?.tableReducer?.tablesList); 
  const [handleBookingModalVisibility, sethandleBookingModalVisibility] =
  // [1] State for booking modal visibility.
    useState(false); 
  const [handleVacateTableVisibility, sethandleVacateTableVisibility] =
  // [1] State for vacating table modal visibility.
    useState(false); 
  const [userActionModalVisibility, setuserActionModalVisibility] =
    useState(false);
  const [addToWaitListModalVisibility, setaddToWaitListModalVisibility] =
    useState(false);
  const [
    tableTimeHandlingModalVisibility,
    settableTimeHandlingModalVisibility,
  ] = useState(false);
  const [reducingTimeIntervalId, setreducingTimeIntervalId] = useState(null);
  // [1] State for storing table information.
  const [tabelInfo, settabelInfo] = useState(null); 
  //function called when user wants to handle table press
  const handleTableOnPress = data => { 
    // Setting table information.
    settabelInfo(data); 
    // Checking if table is occupied.
    if (data.status == 'o') { 
      // Showing vacate table modal.
      sethandleVacateTableVisibility(true); 
      // Checking if table is free.
    } else if (data.status == 'f') { 
      // Showing booking modal.
      sethandleBookingModalVisibility(true); 
    }
  };

//function to reduce table time 3rd
  const findTableAndReduceItsTime = (time, tableData) => {
    // Starts a try block to catch and handle any potential errors that might occur during the execution of the code within it.   
    // Filters the array `tablesDataRedux` to find the table where the table's ID (table number) matches the `id` from `tableData`. 
    try {  
      let tableToUpdate = tablesDataRedux.filter(
        item => item.id == tableData.id,
      )?.[0];
         // Logs the 'time' variable to the console, useful for debugging purposes to check the time being reduced. 
      console.log('time', time);
        // Creates an array of all tables except the one to be updated. 
      let filterArray = tablesDataRedux.filter(item => item.id != tableData.id);
       // Calculates the new start time by subtracting the given `time` converted to milliseconds (time in minutes * 60 seconds/minute * 1000 milliseconds/second) from `tableToUpdate.start_time`. 
      let reducedTimevalue =
        tableToUpdate.start_time - parseInt(time) * 60 * 1000;
              // Checks if the new time value is less than or equal to zero. 
      if (reducedTimevalue <= 0) {
          // If the time is up, updates the table's status to 'f' (presumably indicating 'free' or 'finished').
        tableToUpdate.status = 'f';
         // Clears the interval set by setInterval using the ID stored in `reducingTimeIntervalId` to stop further time reduction. 
        clearInterval(reducingTimeIntervalId);
      }
        // Updates the start time of the table to the new reduced time. 
      tableToUpdate.start_time = reducedTimevalue;
       // Combines the updated table with the array of other tables, sorts them by their ID, and stores this new array. 
      let newArray = [...filterArray, tableToUpdate].sort(
        (a, b) => a.id - b.id,
      );
       // Dispatches an action to update the state with the new array of table data. 
      dispatch(setTableList(newArray));
    } catch (error) {   // Catches any errors that occur during the try block execution. 
        // Logs any caught errors to the console. 
      console.log('error', error);
    }
  };
// Declares a function named `reduceTableTimePeriodically` with parameters `data` and `time`. 
  const reduceTableTimePreodically = (data, time) => {
      // Logs a message to the console that includes the function name and the time parameter to provide traceability for debugging. 
    console.log('data reduceTableTimePreodically time', time);
      // Generates a string that represents the time interval between function calls.    // The interval is based on the `persons` property of the `data` object, converting that number to milliseconds.   // For example, if `data.persons` is 4, then `timeIntervalRepeatAfter` would be '40000' milliseconds i.e. 40 seconds. 
    let timeIntervalRepeatAfter = data?.persons + '0000';
      // Logs the calculated interval to the console for debugging purposes. 
    console.log('timeIntervalRepeatAfter', timeIntervalRepeatAfter);
      // Sets an interval that calls the `findTableAndReduceItsTime` function repeatedly every `timeIntervalRepeatAfter` milliseconds. 
        // The `parseInt` function is used to convert the string `timeIntervalRepeatAfter` into an integer. 
    const countdownInterval = setInterval(() => {
       // Calls `findTableAndReduceItsTime` with the current `time` and `data`.  
      findTableAndReduceItsTime(time, data);
    }, parseInt(timeIntervalRepeatAfter));
     // Calls `setreducingTimeIntervalId` to store the interval ID returned by `setInterval`.   // This ID can be used to clear the interval later, preventing further executions if necessary. 
    setreducingTimeIntervalId(countdownInterval);
  };
  // function to reduce table time 1st
  const reduceTabelTime = data => {
    console.log('am called reduceTabelTime', data);
      // Filters a list of tables from `tablesDataRedux` to find those that are occupied ('o') and match the number of persons specified in `data.table`.
    let occupiedTables = tablesDataRedux.filter(
      item => item.status == 'o' && item.persons == data.table,
    );
      // Checks if there is more than one occupied table that matches the criteria. 
    if (occupiedTables.length > 1) {
          // If more than one table is found, it reduces the array of tables to a single table with the earliest `start_time`. 
      let temparry = occupiedTables.reduce((oldestItem, currentItem) => {
           // Compares the start times of the current item and the oldest item found so far and returns the older of the two. 
        return currentItem.start_time < oldestItem.start_time
          ? currentItem
          : oldestItem;
      }, occupiedTables[0]);   // Initializes the reduction with the first item in the occupiedTables array. 

        // Calls `reduceTableTimePeriodically` with the table having the earliest start time and the time to reduce from `data.time`. 
      reduceTableTimePreodically(temparry, data?.time);
    } 
      // Checks if there is exactly one table that matches the criteria.
    else if (occupiedTables.length == 1) {
         // If only one table matches, directly calls `reduceTableTimePeriodically` with that table and the time from `data.time`. 
      reduceTableTimePreodically(occupiedTables[0], data?.time);
    }
        // If no tables match the condition, no action is performed, and no additional code is needed to handle this case. 
  };
// function to vacate table
  const handleVacateTable = data => {
    let occupiedTables = tablesDataRedux.filter(
      item => item.status == 'o' && item.persons == data.table,
    );
    if (occupiedTables.length > 1) {
      let temparry = occupiedTables.reduce((oldestItem, currentItem) => {
        return currentItem.start_time < oldestItem.start_time
          ? currentItem
          : oldestItem;
      }, occupiedTables[0]);
      handleTabelDetailsModalVisibilityFun(temparry);
    } else if (occupiedTables.length == 1) {
      handleTabelDetailsModalVisibilityFun(occupiedTables[0]);
    }
  };

  // function to determine which action to perform on table
  const handleTabelTimeModalFun = data => {
    if (data?.table && data?.time) {
      reduceTabelTime(data);
    }
    if (data?.table && !data?.time) {
      handleVacateTable(data);
    }
    setuserActionModalVisibility(false);
    settableTimeHandlingModalVisibility(!tableTimeHandlingModalVisibility);
  };

  // function to handle user action modal visibility
  const handleUserActionModalVisibilityFun = data => {
    try {
      console.log('handleUserActionModalVisibilityFun');
      setuserActionModalVisibility(!userActionModalVisibility);
    } catch (error) {}
  };

  // function to handle booking modal visibility
  const handleBookingModalVisibilityFun = data => {
    console.log('data handleBookingModalVisibilityFun', data);
    if (data?.booking) { // Checking if booking data exists.
      let temp = {
        ...tabelInfo,
        status: 'o',
        booking: data,
        index: tabelInfo.id,
        start_time: Date.now(),
      };
      // console.log('temp', temp);
      dispatch(bookTable(temp));
    }
    // Toggling booking modal visibility.
    sethandleBookingModalVisibility(!handleBookingModalVisibility); 
  };

  //to mark table as free/vacate
  const handleTabelDetailsModalVisibilityFun = data => { 
    console.log('data handleTabelDetailsModalVisibilityFun', data);
    // Checking if data exists.
    if (data?.id || data?.status) { 
      // Creating temporary object with updated table details.
      let temp = { 
        ...data,
        status: 'f',
        booking: null,
        index: data.id,
      };
      // Dispatching action to vacate table.
      dispatch(vacateTable(temp)); 
      alert(`Table ${data.id} vacated successfully`);
    }
    // Toggling table details modal visibility.
    sethandleVacateTableVisibility(!handleTabelDetailsModalVisibilityFun); 
  };
  // function to handle add to waitlist modal visibility
  const handleAddToWaitListModalVisibilityFun = () => {
    setuserActionModalVisibility(false);
    setaddToWaitListModalVisibility(!addToWaitListModalVisibility);
  };

  // function to hide table time modal
  const hideTableTimeModalFun = () => {
    settableTimeHandlingModalVisibility(false);
  };

  // function to render table single item
  const renderTableItem = ({item, index}) => { 
    return (
      <TableItem
        key={index}
        data={item}
        handleTableOnPress={handleTableOnPress}
        markTableAsEmpty={handleTabelDetailsModalVisibilityFun}
      />
    );
  };
  // Displaying following in order:
  // 1. Modal for booking table
  // 2. Modal for table details and vacating table
  // 3. Modal for table time reducer
  // 4. Modal for user action like reduce time or add to waitlist
  // 5. Modal for add to waitlist
  // 6. Main Header
  // 7. Showing Table List via FlatList component
  return (
    <View style={[GlobalStyles.mainView, styles.mainView]}>
      <BookingTableModal
        visible={handleBookingModalVisibility}
        handleVisibility={handleBookingModalVisibilityFun}
        data={tabelInfo}
      />
      <TableDetailsModal
        visible={handleVacateTableVisibility}
        handleVisibility={handleTabelDetailsModalVisibilityFun}
        data={tabelInfo}
        vacateTabel={handleTabelDetailsModalVisibilityFun}
      />
      <TableTimeReducerModal
        handleVisibility={hideTableTimeModalFun}
        visible={tableTimeHandlingModalVisibility}
        action1={handleTabelTimeModalFun}
      />
      <UserActionModal
        action1={handleTabelTimeModalFun}
        handleVisibility={handleUserActionModalVisibilityFun}
        visible={userActionModalVisibility}
        action2={handleAddToWaitListModalVisibilityFun}
      />
      <AddTowWaitListModal
        handleVisibility={handleAddToWaitListModalVisibilityFun}
        visible={addToWaitListModalVisibility}
      />
      <AppHeader
        label={'Home'}
        right
        rightOnPress={handleUserActionModalVisibilityFun}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tablesDataRedux}
        numColumns={2}
        renderItem={renderTableItem}
      />
      <SecondaryButton
        label={'SignOut'}
        onPress={() => {
          auth().signOut();
          props.navigation.replace('Login');
        }}
      />
    </View>
  );
}
// Declaring StyleSheet for local styles.
const styles = StyleSheet.create({  
  // Defining style for mainView.
  mainView: {  
    // Aligning items to the center.
    alignItems: 'center', 
  },
});

//REFERENCES:
// [1] 	Meta Platforms, Inc. "useState – React." React Dev. Accessed: Apr. 18, 2024. [Online]. Available: https://react.dev/reference/react/useState
// [2] 	"Redux Fundamentals, Part 5: UI and React | Redux" ReduxJS. Accessed: Apr. 18, 2024. [Online]. Available: https://redux.js.org/tutorials/fundamentals/part-5-ui-react#dispatching-actions-with-usedispatch
// [3] 	"Redux Fundamentals, Part 5: UI and React | Redux" ReduxJS. Accessed: Apr. 18, 2024. [Online]. Available: https://redux.js.org/tutorials/fundamentals/part-5-ui-react#reading-state-from-the-store-with-useselector
// [4]  “FlatList · React Native.” [Online]. Available: https://reactnative.dev/docs/flatlist. [Accessed: 17-Apr-2024]
// [5]  “Authentication.” [Online]. Available: https://rnfirebase.io/auth/usage. [Accessed: 01-May-2024]