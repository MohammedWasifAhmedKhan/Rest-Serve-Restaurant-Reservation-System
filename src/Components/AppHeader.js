import {StyleSheet, Text, View} from 'react-native'; // [1] Importing necessary components from React Native library.
import React from 'react'; // [2] Importing React library to use JSX syntax.
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global'; // Importing custom global constants.

export default function AppHeader({label}) { // Declaring AppHeader functional component. Accepts 'label' as a prop.
  return (
    <View style={styles.mainView}> {/* [1] Rendering a View with local styles. */}
      <Text style={styles.labelStyles}>{label}</Text> {/* [3] Rendering text with local styles and the 'label' prop. */}
    </View>
  );
}

const styles = StyleSheet.create({ // [4] Declaring StyleSheet for local styles.
  mainView: { // Defining style for mainView.
    width: WINDOW_WIDTH, // [5] Setting width based on WINDOW_WIDTH constant.
    alignItems: 'center', // [6] Aligning items to the center.
    height: 40, // [5] Setting fixed height.
    justifyContent: 'center', // [6] Justifying content to the center.
    backgroundColor: AppColors.backgroundColor, // Setting background color based on AppColors constant.
    borderBottomWidth: 0.5, // Setting borderBottomWidth.
    borderBottomColor: 'lightgray', // Setting borderBottomColor.
  },
  labelStyles: { // Defining style for labelStyles.
    color: AppColors.primaryText, // Setting text color based on AppColors constant.
    fontSize: AppFontSize.regular, // Setting font size based on AppFontSize constant.
    fontWeight: '700', // Setting font weight.
  },
});

// JavaScript Fundamentals:
// - ES6+ Features: No explicit usage of arrow functions, template literals, destructuring assignment, or async/await.
// Functions: AppHeader is a functional component.
// Arrays & Objects: No explicit usage of arrays or objects in this code.
// React.js Core Concepts:
// - Components: AppHeader is a functional component.
// - JSX: JSX syntax is used to define UI elements.
// - Props & State: AppHeader component accepts 'label' as a prop.
// - Rendering: UI elements are rendered within the return statement.
// Additional Considerations:
// - Event Handling: No explicit event handling is implemented in this code snippet.
// - Conditional Rendering: No explicit conditional rendering is implemented in this code snippet.
// - Libraries and Frameworks: No state management libraries like Redux or MobX are used in this code snippet.

// REFERENCES:

// [1] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [2] “React Top-Level API – React.” [Online]. Available: https://legacy.reactjs.org/docs/react-api.html. [Accessed: 17-Apr-2024]
// [3] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]
// [4] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [5] “Height and Width · React Native.” [Online]. Available: https://reactnative.dev/docs/height-and-width. [Accessed: 17-Apr-2024]
// [6] “Layout with Flexbox · React Native.” [Online]. Available: https://reactnative.dev/docs/flexbox. [Accessed: 17-Apr-2024]