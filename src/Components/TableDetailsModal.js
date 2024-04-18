import {Modal, StyleSheet, Text, View} from 'react-native'; // [3] [4] Importing necessary components from React Native library.
import React, {useState} from 'react'; // [1] Importing React library and useState hook.
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global'; // Importing custom global constants.
import SecondaryButton from './SecondaryButton'; // Importing SecondaryButton component.
import moment from 'moment'; // [2] Importing moment library for time manipulation.

export default function TableDetailsModal({ // Declaring TableDetailsModal functional component. Props are passed as arguments.
  visible, // Prop indicating whether the modal is visible.
  handleVisibility, // Function to handle visibility of the modal.
  data, // Data object containing table details.
  vacateTabel, // Function to vacate the table.
}) {
  const [timeVal, settimeVal] = useState(null); // [1] Initializing state for time value.
  const [intervalId, setIntervalId] = useState(null); // [1] Initializing state for interval ID.

  const caluculateTimeDifference = () => { // Function to calculate time difference and start countdown.
    const timestamp = data?.start_time; // Get the start time from data object.
    const currentTimestamp = Date.now(); // Get current timestamp.
    const differenceInMilliseconds = currentTimestamp - timestamp; // Calculate difference in milliseconds.
    const differenceInMinutes = differenceInMilliseconds / (1000 * 60); // Convert difference to minutes.
     
    let remainingTime = 90 - differenceInMinutes; // Calculate remaining time for table availability.

    const countdownInterval = setInterval(() => { // Start countdown interval.
      const minutes = Math.floor(remainingTime); // Extract minutes from remaining time.
      const seconds = Math.floor((remainingTime - minutes) * 60); // Extract seconds from remaining time.

      remainingTime -= 1 / 60; // Decrement remaining time.

      settimeVal(`${minutes} minutes ${seconds} seconds`); // Update time value state with remaining time.

      if (remainingTime <= 0) { // Check if remaining time is less than or equal to 0.
        settimeVal(0); // Set time value to 0.
        clearInterval(countdownInterval); // Clear countdown interval.
      }
    }, 1000); // Update every second.
    
    setIntervalId(countdownInterval); // Store interval ID in state.
  };

  return (
    <Modal visible={visible} onShow={caluculateTimeDifference} transparent> {/* [3] Render a modal with visibility and callback for time calculation. */}
      <View style={GlobalStyles.modalMainView}> {/* Render main view with global styles. */}
        <View style={GlobalStyles.modalContentView}> {/* Render content view with global styles. */}
          <Text style={GlobalStyles.modalHeading}>Table Details</Text> {/* Render modal heading with global styles. */}
          <Text style={styles.timeIntervalText}>{timeVal}</Text> {/* Render remaining time with local styles. */}
          <View> {/* Render table details. */}
            <Text style={styles.DetailText}>Table Number: {data?.id}</Text>
            <Text>Booking Number: {data?.booking?.booking}</Text>
            <Text>
              Bokking Status:{' '}
              {data?.status == 'f'
                ? 'Free'
                : data?.status == '0'
                ? 'Occupied'
                : 'Reserved'}
            </Text>
            <Text>
              Persons: {data?.booking?.persons} (Adults :{data?.booking?.adults}{' '}
              Children :{data?.booking?.children})
            </Text>
            <Text>
              Start Time : {moment(data?.start_time).format('hh : mm a')}{' '} 
            </Text>
          </View>
          <View style={styles.buttonView}> {/* Render button view with local styles. */}
            <SecondaryButton onPress={handleVisibility} label={'Close'} /> {/* Render Close button. */}
            <SecondaryButton
              onPress={() => {
                clearInterval(intervalId); // Clear countdown interval.
                vacateTabel(data); // Vacate the table.
              }}
              label={'Vacate'} // Render Vacate button.
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({ // [4] Declaring StyleSheet for local styles.
  DetailText: { // Defining style for DetailText.
    fontSize: AppFontSize.regular, // Setting font size based on AppFontSize constant.
  },
  buttonView: { // Defining style for buttonView.
    flexDirection: 'row', // Setting flexDirection to row.
    justifyContent: 'space-between', // Setting justifyContent to space-between.
    width: WINDOW_WIDTH * 0.75, // Setting width based on WINDOW_WIDTH constant.
  },
  timeIntervalText: { // Defining style for timeIntervalText.
    fontSize: AppFontSize.regular, // Setting font size based on AppFontSize constant.
    padding: 5, // Setting padding.
    backgroundColor: AppColors.buttonPrimary, // Setting background color based on AppColors constant.
    color: AppColors.secondaryText, // Setting text color based on AppColors constant.
  },
});

// REFERENCES: 
// [1] 	Meta Platforms, Inc. "useState – React." React Dev. Accessed: Apr. 18, 2024. [Online]. Available: https://react.dev/reference/react/useState
// [2] 	"Moment.js | Docs" MomentJS. Accessed: Apr. 18, 2024. [Online]. Available: https://momentjs.com/docs/#/use-it/
// [3] “Modal · React Native.” [Online]. Available: https://reactnative.dev/docs/modal. [Accessed: 17-Apr-2024]
// [4] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
