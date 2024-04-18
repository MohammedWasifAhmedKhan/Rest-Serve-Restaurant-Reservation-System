import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native'; // [1] [2] [3] [4] Importing necessary components from React Native library.
import React from 'react'; // Importing React library to use JSX syntax.
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global'; // Importing custom global constants.

export default function MainButton({label, loading,onPress}) { // Declaring MainButton functional component. Props are passed as arguments.
  return loading ? ( // Conditional rendering based on the 'loading' prop.
    <View style={styles.mainView}> {/* Rendering a View with local styles. */}
     <ActivityIndicator color={'#fff'} size={'small'} /> {/* Rendering ActivityIndicator with specified color and size. */}
    </View>
  ) : ( // Conditional rendering if 'loading' is false.
    <TouchableOpacity onPress={onPress}> {/* Rendering TouchableOpacity with onPress event handler. */}
      <View style={styles.mainView}> {/* Rendering a View with local styles. */}
        <Text style={styles.labelText}>{label}</Text> {/* Rendering text with local styles and the 'label' prop. */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ // [5] Declaring StyleSheet for local styles.
  mainView: { // Defining style for mainView.
    width: WINDOW_WIDTH * 0.8, // [6] Setting width based on WINDOW_WIDTH constant.
    alignItems: 'center', // [7] Aligning items to the center.
    justifyContent: 'center', // [7] Justifying content to the center.
    paddingVertical: 10, // [8] Setting vertical padding.
    marginVertical: 10, // [8] Setting vertical margin.
    backgroundColor: AppColors.buttonPrimary, // Setting background color based on AppColors constant.
    borderRadius: 5, // Setting border radius.
  },
  labelText:{ // Defining style for labelText.
    color:AppColors.secondaryText, // Setting text color based on AppColors constant.
    fontSize:AppFontSize.regular // Setting font size based on AppFontSize constant.
  }
});

// JavaScript Fundamentals:

/* ES6+ Features: Arrow functions are used for defining the MainButton functional component. Destructuring assignment is used in the function parameters to extract props.
Functions: The MainButton functional component is defined.
React.js Core Concepts:
Components: MainButton is a functional component.
JSX: JSX syntax is used to define UI elements.
Props & State: MainButton component accepts props like label, loading, and onPress.
Rendering: UI elements are rendered based on the value of the loading prop.
Additional Considerations:
Conditional Rendering: Conditional rendering is implemented based on the loading prop.
Event Handling: Event handling is implemented for the onPress event of TouchableOpacity.
Libraries and Frameworks: No specific state management libraries like Redux or MobX are used in this code snippet.

*/

// REFERENCES:
// [1] “ActivityIndicator · React Native.” [Online]. Available: https://reactnative.dev/docs/activityindicator. [Accessed: 17-Apr-2024]
// [2] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]
// [3] “TouchableOpacity · React Native.” [Online]. Available: https://reactnative.dev/docs/touchableopacity. [Accessed: 17-Apr-2024]
// [4] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [5] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [6] “Height and Width · React Native.” [Online]. Available: https://reactnative.dev/docs/height-and-width. [Accessed: 17-Apr-2024]
// [7] “Layout with Flexbox · React Native.” [Online]. Available: https://reactnative.dev/docs/flexbox. [Accessed: 17-Apr-2024]
// [8] “Layout Props · React Native.” [Online]. Available: https://reactnative.dev/docs/layout-props. [Accessed: 17-Apr-2024]


