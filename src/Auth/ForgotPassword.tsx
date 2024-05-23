// Importing necessary components from 'react-native' [1] [4]
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// Import React and useState hook for state management [2]
import React, {useState} from 'react'; 
// Importing styling constants and global styles from a custom module
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global';
// Import custom TextInput component [3]
import TextInputComp from '../Components/TextInputComp';
// Import custom button component
import MainButton from '../Components/MainButton';
// Import Firebase authentication module [12]
import auth from '@react-native-firebase/auth';

// Define a functional component named 'ForgotPassword' with props
export default function ForgotPassword(props: any) {
  // State hook for managing email input
  const [email, setemail] = useState(null);
  // State hook for managing loading state
  const [loading, setloading] = useState(false);

  // Function to handle password reset process [5]
  const handleReset = () => {
    // Validate that email is entered
    if (!email) {
      alert('Enter email');
      return;
    }
    // Enable loading state when process starts
    setloading(true); 
    // Using Firebase auth to send a password reset email //[13]
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Disable loading state after email is sent
        setloading(false); 
        // Alert user of successful action
        alert('Password reset email sent!');
        // Navigate to Login screen 
        props.navigation.navigate('Login'); 
      })
      .catch(err => {
        // Disable loading state on error
        setloading(false); 
        // Log error details
        console.log('err', err); 
        // Alert user of the error
        alert('Something went wrong! Try again later'); 
        // Navigate to Login screen even on error
        props.navigation.navigate('Login'); 
      });
  };

  // Render the UI components
  return (
    <View style={[GlobalStyles.mainView, GlobalStyles.alignCenter]}>
      <Text style={GlobalStyles.mainLabel}>Forgot Password</Text>
      <TextInputComp
        label={'Enter Email'}
        placeholder={'Enter Email'}
        onChangeVal={setemail} 
      />
      <MainButton
      // Button label
        label={'Reset Password'} 
        // Pass loading state to the button
        loading={loading} 
        // Set onPress to trigger handleReset function
        onPress={handleReset} 
      />
    </View>
  );
}

// StyleSheet to style the components [8]
const styles = StyleSheet.create({
  signUpMainView: {
    // Width as a percentage of the window width
    width: WINDOW_WIDTH * 0.8, 
    // [10] Align items towards the end of the flex-direction
    alignItems: 'flex-end', 
    // Distribute extra space towards the end
    justifyContent: 'flex-end', 
    // [11] Vertical margin
    marginVertical: 10, 
    // Layout children in a row
    flexDirection: 'row', 
  },
  signUpText: {
    // Bold text for emphasis
    fontWeight: 'bold', 
    // Use predefined font size
    fontSize: AppFontSize.small, 
    // Use predefined color
    color: AppColors.primaryText, 
  },
  dontHaveText: {
    // Text color
    color: AppColors.primaryText,
    // Font size 
    fontSize: AppFontSize.small, 
  },
});

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
// [12] “Authentication.” [Online]. Available: https://rnfirebase.io/auth/usage. [Accessed: 01-May-2024]
// [13] Google. "Manage Users in Firebase." Firebase. Accessed: May 01, 2024. [Online]. Available: https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email
