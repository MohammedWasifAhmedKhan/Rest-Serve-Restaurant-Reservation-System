// [1] [2] [3] [4] [5] Importing necessary components from React Native library.
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native'; 
// Importing React library to use JSX syntax.
import React from 'react'; 
// Importing custom global constants.
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global'; 

// Declaring SecondaryButton functional component. Props are passed as arguments.
export default function SecondaryButton({label, loading, onPress, customStyles}) { 
  // Conditional rendering based on the 'loading' prop.
  return loading ? ( 
    <View style={[styles.mainView, customStyles]}>  
      <ActivityIndicator color={'#fff'} size={'small'} /> 
    </View>
    // Conditional rendering if 'loading' is false.
  ) : ( 
    <TouchableOpacity onPress={onPress}> 
      <View style={[styles.mainView, customStyles]}> 
        <Text style={styles.labelText}>{label}</Text> 
      </View>
    </TouchableOpacity>
  );
}
// [5] Declaring StyleSheet for local styles.
const styles = StyleSheet.create({ 
  // Defining style for mainView.
  mainView: { 
    // [6] Setting width based on WINDOW_WIDTH constant.
    width: WINDOW_WIDTH * 0.35, 
    // [7] Aligning items to the center.
    alignItems: 'center', 
    // [7] Justifying content to the center.
    justifyContent: 'center', 
    // [8] Setting vertical padding.
    paddingVertical: 10, 
    // [8] Setting vertical margin.
    marginVertical: 10, 
    // Setting background color based on AppColors constant.
    backgroundColor: AppColors.buttonPrimary, 
    // Setting border radius.
    borderRadius: 5, 
  },
  // Defining style for labelText.
  labelText: { 
    // Setting text color based on AppColors constant.
    color: AppColors.secondaryText, 
    // Setting font size based on AppFontSize constant.
    fontSize: AppFontSize.regular, 
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


