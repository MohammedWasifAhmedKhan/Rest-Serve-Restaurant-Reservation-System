import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native'; // [1] [2] [3] [4] [5] Importing necessary components from React Native library.
import React from 'react'; // Importing React library to use JSX syntax.
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global'; // Importing custom global constants.

export default function SecondaryButton({label, loading, onPress, customStyles}) { // Declaring SecondaryButton functional component. Props are passed as arguments.
  return loading ? ( // Conditional rendering based on the 'loading' prop.
    <View style={[styles.mainView, customStyles]}> {/* Rendering a View with combined local styles and custom styles. */}
      <ActivityIndicator color={'#fff'} size={'small'} /> {/* Rendering ActivityIndicator with specified color and size. */}
    </View>
  ) : ( // Conditional rendering if 'loading' is false.
    <TouchableOpacity onPress={onPress}> {/* Rendering TouchableOpacity with onPress event handler. */}
      <View style={[styles.mainView, customStyles]}> {/* Rendering a View with combined local styles and custom styles. */}
        <Text style={styles.labelText}>{label}</Text> {/* Rendering text with local styles and the 'label' prop. */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ // [5] Declaring StyleSheet for local styles.
  mainView: { // Defining style for mainView.
    width: WINDOW_WIDTH * 0.35, // [6] Setting width based on WINDOW_WIDTH constant.
    alignItems: 'center', // [7] Aligning items to the center.
    justifyContent: 'center', // [7] Justifying content to the center.
    paddingVertical: 10, // [8] Setting vertical padding.
    marginVertical: 10, // [8] Setting vertical margin.
    backgroundColor: AppColors.buttonPrimary, // Setting background color based on AppColors constant.
    borderRadius: 5, // Setting border radius.
  },
  labelText: { // Defining style for labelText.
    color: AppColors.secondaryText, // Setting text color based on AppColors constant.
    fontSize: AppFontSize.regular, // Setting font size based on AppFontSize constant.
  },
});

// REFERENCES:
// [1] “ActivityIndicator · React Native.” [Online]. Available: https://reactnative.dev/docs/activityindicator. [Accessed: 17-Apr-2024]
// [2] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]
// [3] “TouchableOpacity · React Native.” [Online]. Available: https://reactnative.dev/docs/touchableopacity. [Accessed: 17-Apr-2024]
// [4] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [5] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [6] “Height and Width · React Native.” [Online]. Available: https://reactnative.dev/docs/height-and-width. [Accessed: 17-Apr-2024]
// [7] “Layout with Flexbox · React Native.” [Online]. Available: https://reactnative.dev/docs/flexbox. [Accessed: 17-Apr-2024]
// [8] “Layout Props · React Native.” [Online]. Available: https://reactnative.dev/docs/layout-props. [Accessed: 17-Apr-2024]
