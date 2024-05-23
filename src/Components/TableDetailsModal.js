// [3] [4] Importing necessary components from React Native library.
import {Modal, StyleSheet, Text, View} from 'react-native'; 
// [1] Importing React library and useState hook.
import React, {useState} from 'react'; 
// Importing custom global constants.
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global';
// Importing SecondaryButton component.
import SecondaryButton from './SecondaryButton';
// [2] Importing moment library for time manipulation.
import moment from 'moment';

// Declaring TableDetailsModal functional component. Props are passed as arguments.
export default function TableDetailsModal({
  // Prop indicating whether the modal is visible.
  visible,
  // Function to handle visibility of the modal.
  handleVisibility,
  // Data object containing table details.
  data,
  // Function to vacate the table.
  vacateTabel,
}) {
  // [1] Initializing state for time value.
  const [timeVal, settimeVal] = useState(null); 
  // [1] Initializing state for interval ID.
  const [intervalId, setIntervalId] = useState(null);  
  // // Function to calculate time difference and start countdown.
  const caluculateTimeDifference = () => { 
    // Get the start time from data object.
    const timestamp = data?.start_time;
    // Get current timestamp.
    const currentTimestamp = Date.now();
    // Calculate difference in milliseconds.
    const differenceInMilliseconds = currentTimestamp - timestamp;
    // Convert difference to minutes.
    const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
    // console.log('differenceInMilliseconds', differenceInMilliseconds)
    
    // Calculate remaining time for table availability.
    let remainingTime = 90 - differenceInMinutes;
    // console.log('remainingTime', remainingTime)

    // Start countdown interval.
    const countdownInterval = setInterval(() => {
      // Extract minutes from remaining time.
      const minutes = Math.floor(remainingTime);
      // Extract seconds from remaining time.
      const seconds = Math.floor((remainingTime - minutes) * 60);

      console.log(`${minutes} minutes ${seconds} seconds remaining`);

      // Decrement remaining time.
      remainingTime -= 1 / 60;
      // Update time value state with remaining time.
      settimeVal(`${minutes} minutes ${seconds} seconds`);
      // Check if remaining time is less than or equal to 0.
      if (remainingTime <= 0) {
        // Set time value to 0.
        settimeVal(0);
        // Clear countdown interval.
        clearInterval(countdownInterval);
        console.log('Countdown completed!');
      }
      // Update every second.
    }, 1000);
    // Store interval ID in state.
    setIntervalId(countdownInterval);
  };
  const onDismissModal=()=>{
    clearInterval(intervalId);
  }
  return (
    <Modal visible={visible} transparent>
      <View style={GlobalStyles.modalMainView}>
        <View style={GlobalStyles.modalContentView}>
          <Text style={GlobalStyles.modalHeading}>Table Details</Text>
          <View>
            <Text style={styles.DetailText}>Table : {data?.id}</Text>
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
          <View style={styles.buttonView}>
            <SecondaryButton onPress={handleVisibility} label={'Close'} />
            <SecondaryButton
              onPress={() => {
                // clearInterval(intervalId);
                vacateTabel(data);
              }}
              label={'Vacate'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({  // [4] Declaring StyleSheet for local styles.
  DetailText: {
    fontSize: AppFontSize.regular,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WINDOW_WIDTH * 0.75,
  },
  timeIntervalText:{
    fontSize:AppFontSize.regular,
    padding:5,
    backgroundColor:AppColors.buttonPrimary,
    color:AppColors.secondaryText
  }
});

// REFERENCES: 
// [1] 	Meta Platforms, Inc. "useState – React." React Dev. Accessed: Apr. 18, 2024. [Online]. Available: https://react.dev/reference/react/useState
// [2] 	"Moment.js | Docs" MomentJS. Accessed: Apr. 18, 2024. [Online]. Available: https://momentjs.com/docs/#/use-it/
// [3] “Modal · React Native.” [Online]. Available: https://reactnative.dev/docs/modal. [Accessed: 17-Apr-2024]
// [4] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
