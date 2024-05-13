import {Modal, StyleSheet, Text, View} from 'react-native'; // [3] [4] Importing necessary components from React Native library.
import React, {useState} from 'react'; // [1] Importing React library and useState hook.
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global';
import SecondaryButton from './SecondaryButton';
import moment from 'moment';// [2] Importing moment library for time manipulation.

export default function TableDetailsModal({
  visible,
  handleVisibility,
  data,
  vacateTabel,
}) {
  const [timeVal, settimeVal] = useState(null); // [1] Initializing state for time value.
  const [intervalId, setIntervalId] = useState(null);  // [1] Initializing state for interval ID.

  const caluculateTimeDifference = () => { {/* [3] Render a modal with visibility and callback for time calculation. */}
    const timestamp = data?.start_time;
    const currentTimestamp = Date.now();
    const differenceInMilliseconds = currentTimestamp - timestamp;
    const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
    // console.log('differenceInMilliseconds', differenceInMilliseconds)
     
    let remainingTime = 90 - differenceInMinutes;
    // console.log('remainingTime', remainingTime)

    const countdownInterval = setInterval(() => {
      const minutes = Math.floor(remainingTime);
      const seconds = Math.floor((remainingTime - minutes) * 60);

      console.log(`${minutes} minutes ${seconds} seconds remaining`);

      remainingTime -= 1 / 60;
      settimeVal(`${minutes} minutes ${seconds} seconds`);
      if (remainingTime <= 0) {
        settimeVal(0);
        clearInterval(countdownInterval);
        console.log('Countdown completed!');
      }
    }, 1000);
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
          {/* <Text style={styles.timeIntervalText}>{timeVal}</Text> */}
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
