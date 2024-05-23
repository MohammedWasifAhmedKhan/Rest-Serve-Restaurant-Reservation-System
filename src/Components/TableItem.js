import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import moment from 'moment';
const timeInterval = 18;
// This function defines a React component named TableItem, which receives three props: data, handleTableOnPress, and markTableAsEmpty. 
export default function TableItem({
  data,
  handleTableOnPress,
  markTableAsEmpty,
}) {
   // Initializing state variables: remainingTime to hold the time remaining for the table, and intervalId to manage the interval used for updating the time display. 
  const [remainingTime, setremainingTime] = useState(0);
  const [intervalId, setintervalId] = useState(null);

  // Function to format milliseconds into minutes and seconds
  function formatTime() {
      // Extracting the start time of the table from the data 
    let startTimeStamp = data.start_time;
    // Getting the current timestamp
    let currentTimeStamp = Date.now();
     // Calculating the elapsed time in milliseconds since the start time 
    let elapsedTime = currentTimeStamp - startTimeStamp;
      // Calculating the remaining time in milliseconds by subtracting the elapsed time from the total interval time 
    let remainingTime = timeInterval * 60 * 1000 - elapsedTime;
     // If the remaining time is less than or equal to zero, clear the interval and mark the table as empty 
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      markTableAsEmpty(data);
    }
      // Converting the remaining time from milliseconds to minutes and seconds 
    let totalSeconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return {minutes, seconds};
  }
    // Function to display the remaining time in minutes and seconds 
  function displayTime() {
    let {minutes, seconds} = formatTime();
    // Adding leading zeros to minutes and seconds if they are less than 10 
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = seconds > 9 ? seconds : '0' + seconds;
    // Updating the remainingTime state with the formatted time 
    setremainingTime(`${minutes}:${seconds}`);
  }

   // Function to check the status of the table and start displaying the remaining time if it's occupied 
  const checkStatusAndShowTime = () => {
    if (data.status == 'o') {
       // Setting up an interval to update the time display every second 
      let intervalTempId = setInterval(() => {
        displayTime();
      }, 1000);
        // Storing the interval ID in the state variable intervalId 
      setintervalId(intervalTempId);
    }
  };
    // Effect hook to trigger the checkStatusAndShowTime function whenever the status of the table changes
  useEffect(() => {
    checkStatusAndShowTime();
  }, [data.status]);
 // Returning the JSX for rendering the table item
  return (
    <TouchableOpacity onPress={() => handleTableOnPress(data)}> 
      <View style={styles.mainView}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="group" size={RFValue(20)} color="#000" />
          <Text style={styles.tabelePersonsText}>: {data.persons}</Text>
        </View> 
        {data.status === 'o' && (
          <>
            <Text>Booked At: {moment(data.booking_time).format('hh:mm A')}</Text>
            <Text>Remaining Time: {remainingTime}</Text>
          </>
        )}
        <View
          style={[
            styles.roundView,
            {
              backgroundColor:
                data.status == 'o'
                  ? AppColors.occupiedTable
                  : data.status == 'f'
                  ? AppColors.freeTable
                  : AppColors.reserveTable,
            },
          ]}>
          <Text style={styles.labelText}>{data.id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
// [2] Declaring StyleSheet for local styles.
const styles = StyleSheet.create({ 
  mainView: {
    width: WINDOW_WIDTH * 0.4,
    backgroundColor: '#fff',
    marginLeft: 1,
    height: WINDOW_WIDTH * 0.4,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  labelText: {
    color: AppColors.secondaryText,
    fontWeight: 'bold',
    fontSize: AppFontSize.large,
  },
  roundView: {
    width: '50%',
    height: '50%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  tabelePersonsText: {
    color: AppColors.primaryText,
    fontSize: AppFontSize.regular,
  },
});


// REFERENCES:
// [1] “TouchableOpacity · React Native.” [Online]. Available: https://reactnative.dev/docs/touchableopacity. [Accessed: 17-Apr-2024]
// [2] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]