// [1] Importing necessary components from React Native library.
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// [2] Importing React library to use JSX syntax.
import React from 'react';
// Importing custom global constants.
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global';
import Feather from 'react-native-vector-icons/Feather';

export default function AppHeader({left, label, right,rightOnPress}) {
  // Declaring AppHeader functional component. Accepts 'label' as a prop.
  return (
    // [1] Rendering a View with local styles, follwed by rendering of text with local styles and the 'label' prop.
    <View style={styles.mainView}>
      <View style={styles.sideView}>{/* <Text>left</Text> */}</View>
      <Text style={styles.labelStyles}>{label}</Text>
      <View style={[styles.sideView,{alignItems:'flex-end',paddingRight:10}]}>
        {right && (
          <TouchableOpacity onPress={rightOnPress}>
            <Feather name={'activity'} size={25} color={'black'} />
          </TouchableOpacity>
        )}
        {/* <Text>right</Text> */}
      </View>
    </View>
  );
}
// [4] Declaring StyleSheet for local styles.
const styles = StyleSheet.create({
  // Defining style for mainView.
  mainView: {
    // [5] Setting width based on WINDOW_WIDTH constant.
    width: WINDOW_WIDTH,
    // [6] Aligning items to the center.
    alignItems: 'center',
    // [5] Setting fixed height.
    height: 40,
    // [6] Justifying content to the center.
    justifyContent: 'space-between',
    // Setting background color based on AppColors constant.
    backgroundColor: AppColors.backgroundColor,
    // Setting borderBottomWidth.
    borderBottomWidth: 0.5,
    // Setting borderBottomColor.
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    // alignContent:'space-between'
    paddingHorizontal: 5,
  },
  // Defining style for labelStyles.
  labelStyles: {
    // Setting text color based on AppColors constant.
    color: AppColors.primaryText,
    // Setting font size based on AppFontSize constant.
    fontSize: AppFontSize.regular,
    // Setting font weight.
    fontWeight: '700',
  },
  sideView: {
    width: '30%',
  },
});

// REFERENCES:

// [1] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [2] “React Top-Level API – React.” [Online]. Available: https://legacy.reactjs.org/docs/react-api.html. [Accessed: 17-Apr-2024]
// [3] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]
// [4] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [5] “Height and Width · React Native.” [Online]. Available: https://reactnative.dev/docs/height-and-width. [Accessed: 17-Apr-2024]
// [6] “Layout with Flexbox · React Native.” [Online]. Available: https://reactnative.dev/docs/flexbox. [Accessed: 17-Apr-2024]