import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'; // [1] [4] Importing necessary components from React Native library.
import React from 'react'; // [2] Importing React library to use JSX syntax.
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global'; // [3] Importing custom global styles and constants.
import TextInputComp from '../Components/TextInputComp'; // [3] Importing custom TextInput component.
import MainButton from '../Components/MainButton'; // Importing custom MainButton component.

export default function Login(props: any) { // Declaring Login functional component. Props are passed as argument to this component.
  const handleLogin = () => { // [5] Declaring handleLogin arrow function.
    props.navigation.navigate('Register'); // [6] Navigating to 'Register' screen using props.
  };

  return (
    <View style={[GlobalStyles.mainView, GlobalStyles.alignCenter]}> {/* [1] Rendering a View with global styles. */}
      <Text style={GlobalStyles.mainLabel}>Login</Text> {/* [7] Rendering text with global styles. */}
      <TextInputComp label={'Enter Email'} placeholder={'Enter Email'} /> {/* Rendering custom TextInput component for email input. */}
      <TextInputComp label={'Enter Password'} placeholder={'Enter Password'} /> {/* Rendering custom TextInput component for password input. */}
      <View style={styles.signUpMainView}> {/* [1] Rendering a View with local styles for sign up text and button. */}
        <Text style={styles.dontHaveText}>Dont have an Account? </Text> {/* [7] Rendering text with local styles. */}
        <TouchableOpacity> {/* [4] Rendering TouchableOpacity for sign up button. */}
          <Text style={styles.signUpText}>Sign Up</Text> {/* [7] Rendering text with local styles for sign up button. */}
        </TouchableOpacity>
      </View>
      <View style={styles.signUpMainView}> {/* [1] Rendering a View with local styles for forgot password text and button. */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.dontHaveText}>Forgot Password? </Text> {/* [7] Rendering text with local styles for forgot password button. */}
        </TouchableOpacity>
      </View>
      <MainButton label={'Login'} loading={false} onPress={handleLogin} /> {/* Rendering custom MainButton component for login action. */}
    </View>
  );
}

const styles = StyleSheet.create({ // [8] Declaring StyleSheet for local styles.
  signUpMainView: { // [9] Defining style for signUpMainView.
    width: WINDOW_WIDTH * 0.8, // Setting width based on WINDOW_WIDTH.
    alignItems: 'flex-end', // [10] Aligning items to the end of the flex container.
    justifyContent: 'flex-end', // [10] Justifying content to the end of the flex container.
    marginVertical: 10, // [11] Setting vertical margin.
    flexDirection: 'row', // [10] Arranging children in a row.
  },
  signUpText: { // [9] Defining style for signUpText.
    fontWeight: 'bold', // Setting font weight to bold.
    fontSize: AppFontSize.small, // Setting font size based on AppFontSize.
    color: AppColors.primaryText, // Setting text color based on AppColors.
  },
  dontHaveText: { // [9] Defining style for dontHaveText.
    color: AppColors.primaryText, // Setting text color based on AppColors.
    fontSize: AppFontSize.small, // Setting font size based on AppFontSize.
  },
});

// Conditional Rendering: No explicit conditional rendering is implemented in this code.
// Libraries and Frameworks: State management libraries like Redux or MobX are not used in this code.
// No explicit usage of state in this code.
// Arrays & Objects: No explicit usage of arrays or objects in this code.
// Destructuring assignment is not explicitly used in this code snippet.

//REFERENCES:
// [1] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [2] “React Top-Level API – React.” [Online]. Available: https://legacy.reactjs.org/docs/react-api.html. [Accessed: 17-Apr-2024]
// [3] “TextInput · React Native.” [Online]. Available: https://reactnative.dev/docs/textinput. [Accessed: 17-Apr-2024]
// [4] “TouchableOpacity · React Native.” [Online]. Available: https://reactnative.dev/docs/touchableopacity. [Accessed: 17-Apr-2024]
// [5] MDN. "Arrow function expressions - JavaScript | MDN." MDN Web Docs. Accessed: Apr. 17, 2024. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// [6] “Moving between screens | React Navigation.” [Online]. Available: https://reactnavigation.org/docs/navigating/. [Accessed: 17-Apr-2024]
// [7] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]
// [8] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [9] 	MDN. "Working with objects - JavaScript | MDN" MDN Web Docs. Accessed: Apr. 17, 2024. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// [10] “Layout with Flexbox · React Native.” [Online]. Available: https://reactnative.dev/docs/flexbox. [Accessed: 17-Apr-2024]
// [11] “Layout Props · React Native.” [Online]. Available: https://reactnative.dev/docs/layout-props. [Accessed: 17-Apr-2024]