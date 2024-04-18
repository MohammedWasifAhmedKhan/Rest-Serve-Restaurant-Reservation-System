import {StyleSheet, Text, TextInput, View} from 'react-native'; // [1] [2] Importing necessary components from React Native library.
import React from 'react'; // Importing React library to use JSX syntax.
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global'; // Importing custom global constants.

export default function TextInputComp({label, placeholder}) { // Declaring TextInputComp functional component. Props are passed as arguments.
  return (
    <View style={styles.mainView}> {/* Rendering a View with local styles. */}
      <Text style={styles.labelText}>{label}</Text> {/* Rendering text with local styles and the 'label' prop. */}
      <TextInput placeholder={placeholder} style={styles.textInputStyle} /> {/* [2] Rendering TextInput with placeholder and local styles. */}
    </View>
  );
}

const styles = StyleSheet.create({ // [1] Declaring StyleSheet for local styles.
  mainView: { // Defining style for mainView.
    width: WINDOW_WIDTH * 0.8, // Setting width based on WINDOW_WIDTH constant.
    marginVertical: 5, // Setting vertical margin.
  },
  textInputStyle: { // Defining style for textInputStyle.
    borderRadius: 5, // Setting border radius.
    borderWidth: 1, // Setting border width.
    height: 40, // Setting height.
    paddingHorizontal: 5, // Setting horizontal padding.
  },
  
  labelText: { // Defining style for labelText.
    color: AppColors.primaryText, // Setting text color based on AppColors constant.
    fontSize: AppFontSize.regular, // Setting font size based on AppFontSize constant.
    marginBottom: 5, // Setting bottom margin.
  },
});


// REFERENCES:
// [1] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [2] “TextInput · React Native.” [Online]. Available: https://reactnative.dev/docs/textinput. [Accessed: 17-Apr-2024]
