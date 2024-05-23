// [2] [3] Importing necessary components from React Native library.
import {StyleSheet, Text, TextInput, View} from 'react-native'; 
// [1] Importing React library to use JSX syntax.
import React from 'react';  
// Importing custom global constants.
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global'; 
// Declaring TextInputComp functional component. Props are passed as arguments.
export default function TextInputComp({
  label,
  placeholder,
  onChangeVal,
  secureTextEnty = false,
  keyboardType = 'default',
}) { 
  return (
    // Rendering a View with local styles.
    <View style={styles.mainView}>  
      <Text style={styles.labelText}>{label}</Text> 
      
      <TextInput 
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.textInputStyle}
        onChangeText={onChangeVal}
        secureTextEntry={secureTextEnty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: WINDOW_WIDTH * 0.8,
    marginVertical: 5,
  },
  textInputStyle: {
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 5,
  },
  labelText: {
    color: AppColors.primaryText,
    fontSize: AppFontSize.regular,
    marginBottom: 5,
  },
});

// REFERENCES:
// [1] “React Top-Level API – React.” [Online]. Available: https://legacy.reactjs.org/docs/react-api.html. [Accessed: 17-Apr-2024]
// [2] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [3] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]