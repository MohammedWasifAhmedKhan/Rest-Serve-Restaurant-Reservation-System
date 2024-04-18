import {
  FlatList, // [1] 
  Modal, // [2] 
  StyleSheet, // [3]
  Text, // [4] 
  TouchableOpacity, // [5]
  View, // [6]
} from 'react-native';
import React from 'react'; // [7] Importing React library to use JSX syntax.
import {GlobalStyles} from '../Global'; // Importing custom global styles.
import SecondaryButton from './SecondaryButton'; // Importing SecondaryButton component.

const WaitList = [ // Declaration of WaitList array containing booking details.
  {
    id: 0,
    persons: 3,
    adults: 2,
    children: 1,
    booking: 'Josh',
  },
  {
    id: 1,
    persons: 5,
    adults: 2,
    children: 2,
    booking: 'John',
  },
];

export default function BookingTableModal({visible, handleVisibility}) { // Declaring BookingTableModal functional component. Props are passed as arguments.
  const renderWaitListItem = ({item, index}) => { // Declaring renderWaitListItem function.
    return (
      <TouchableOpacity
        style={styles.mainTouchAbleStyle} // Applying local style to TouchableOpacity.
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
            keyExtractor={item => item.id.toString()} // [1] Key extraction for FlatList items.
            data={WaitList} // Passing data to FlatList component.
            renderItem={renderWaitListItem} // Rendering each item in the FlatList using renderWaitListItem function.
          />
          <SecondaryButton onPress={handleVisibility} label={'Close'} /> // [24] Rendering SecondaryButton component with props.
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({ // [3] Declaring StyleSheet for local styles.
  listMainItem: { // Defining style for listMainItem.
    backgroundColor: 'lightgray', // Setting background color.
    padding: 5, // Setting padding.
    paddingVertical: 7, // Setting vertical padding.
  },
  mainTouchAbleStyle: { // Defining style for mainTouchAbleStyle.
    marginBottom: 5, // Setting margin bottom.
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