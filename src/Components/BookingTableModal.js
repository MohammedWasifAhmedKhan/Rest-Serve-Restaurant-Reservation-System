import {
  // [1]
  FlatList,
  // [2]
  Modal,
  // [3]
  StyleSheet,
  // [4]
  Text,
  // [5]
  TouchableOpacity,
  // [6]
  View,
} from 'react-native';
// [7]
import React from 'react';
// Importing custom global styles.
import {GlobalStyles} from '../Global';
// Importing SecondaryButton component.
import SecondaryButton from './SecondaryButton';
import {useSelector} from 'react-redux';
// Declaring BookingTableModal functional component. Props are passed as arguments.
export default function BookingTableModal({visible, handleVisibility, data}) {
  console.log('data', data);
  const reduxState = useSelector(state => state?.waitlistReducer?.waitList);
  console.log('reduxState', reduxState);
  // Declaring renderWaitListItem function.
  const renderWaitListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        // Applying local style to TouchableOpacity.
        style={styles.mainTouchAbleStyle}
        onPress={() => handleVisibility(item)}>
        <View key={index} style={styles.listMainItem}>
          <Text>
            Booking by: {item.booking} (
            {`Adults :${item.adults} Children :${item.children}`})
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Modal visible={visible} transparent onDismiss={handleVisibility}>
      <View style={GlobalStyles.modalMainView}>
        <View style={GlobalStyles.modalContentView}>
          <Text style={GlobalStyles.modalHeading}>Select From Waitlist</Text>
          <FlatList
            // [1] Key extraction for FlatList items.
            keyExtractor={item => item.id}
            // Passing data to FlatList component.
            data={
              reduxState.filter(item => item.persons == data?.persons) ?? []
            }
            // Rendering each item in the FlatList using renderWaitListItem function.
            renderItem={renderWaitListItem}
            ListEmptyComponent={() => {
              return (
                <Text style={{color:'lightgray'}}>No booking data available for selected table type</Text>
              );
            }}
          />
          <SecondaryButton onPress={handleVisibility} label={'Close'} />
        </View>
      </View>
    </Modal>
  );
}
// [3] Declaring StyleSheet for local styles.
const styles = StyleSheet.create({
  // Defining style for listMainItem.
  listMainItem: {
    // Setting background color.
    backgroundColor: 'lightgray',
    // Setting padding.
    padding: 5,
    // Setting vertical padding.
    paddingVertical: 7,
  },
  // Defining style for mainTouchAbleStyle.
  mainTouchAbleStyle: {
    // Setting margin bottom.
    marginBottom: 5,
  },
});

// REFERENCES:
// [1] “FlatList · React Native.” [Online]. Available: https://reactnative.dev/docs/flatlist. [Accessed: 17-Apr-2024]
// [2] “Modal · React Native.” [Online]. Available: https://reactnative.dev/docs/modal. [Accessed: 17-Apr-2024]
// [3] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [4] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]
// [5] “TouchableOpacity · React Native.” [Online]. Available: https://reactnative.dev/docs/touchableopacity. [Accessed: 17-Apr-2024]
// [6] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [7] “React Top-Level API – React.” [Online]. Available: https://legacy.reactjs.org/docs/react-api.html. [Accessed: 17-Apr-2024]
