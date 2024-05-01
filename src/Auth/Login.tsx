// [1] [4] Importing necessary components and modules from React Native and other dependencies
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react'; // [2]
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global'; // [3] Custom styles and constants
import TextInputComp from '../Components/TextInputComp'; // Custom TextInput component
import MainButton from '../Components/MainButton'; // Custom Button component
import auth from '@react-native-firebase/auth'; // [12] [13] Firebase authentication module
const Buffer = require('buffer').Buffer; // [14] Node.js Buffer module for data manipulation

// Define a functional component named 'Login' accepting props
export default function Login(props: any) {
  // State hooks for managing email, password, and loading status
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);

  // Effect hook to navigate to the Home screen if the user is already logged in
  useEffect(() => {
    if(auth().currentUser){
      // If a user is already signed in, navigate to the 'Home' screen
      props.navigation.replace('Home');
    }
  }, []) // Empty dependency array ensures this effect runs only once after initial render
  
  // [5] Function to handle the login process
  const handleLogin = () => {
    try {
      // Check if email or password is not entered
      if (!email || !password) {
        alert('Fill all fields');
        return;
      }
      setloading(true); // Start loading
      let encryptedPassword = new Buffer(password).toString('base64'); // Encrypt password

      // Sign in using email and encrypted password
      auth()
        .signInWithEmailAndPassword(email, encryptedPassword)
        .then(res => {
          setloading(false);
          props.navigation.replace('Home'); // Navigate to the 'Home' screen after successful login
        })
        .catch(err => {
          // Handle different types of authentication errors
          if (err.code === 'auth/invalid-email') {
            alert('Email address is invalid!');
          }
          if (err.code === 'auth/invalid-credential') {
            alert('The supplied credential is incorrect');
          }
          setloading(false);
          console.log('err', err);
        });
    } catch (error) {
      setloading(false);
      console.log('error', error);
    }
  };

  // Render the login screen layout using the View, Text, TextInputComp, and MainButton components
  return (
    <View style={[GlobalStyles.mainView, GlobalStyles.alignCenter]}>
      <Text style={GlobalStyles.mainLabel}>Login</Text>
      <TextInputComp
        label={'Enter Email'}
        placeholder={'Enter Email'}
        onChangeVal={setemail}
      />
      <TextInputComp
        label={'Enter Password'}
        placeholder={'Enter Password'}
        onChangeVal={setpassword}
        secureTextEntry={true}
      />
      <View style={styles.signUpMainView}>
        <Text style={styles.dontHaveText}>Don't have an Account? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Register');
          }}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpMainView}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.dontHaveText}>Forgot Password? </Text>
        </TouchableOpacity>
      </View>
      <MainButton label={'Login'} loading={loading} onPress={handleLogin} />
    </View>
  );
}

// Stylesheet for the Login component [8]
const styles = StyleSheet.create({
  signUpMainView: { // [9]
    width: WINDOW_WIDTH * 0.8,
    alignItems: 'flex-end', // [10]
    justifyContent: 'flex-end', // [10]
    marginVertical: 10, // [11]
    flexDirection: 'row', // [10]
  },
  signUpText: { // [9]
    fontWeight: 'bold',
    fontSize: AppFontSize.small,
    color: AppColors.primaryText,
  },
  dontHaveText: { // [9]
    color: AppColors.primaryText,
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
// [13] “Node.js Buffer Module.” [Online]. Available: https://www.w3schools.com/nodejs/ref_buffer.asp. [Accessed: 01-May-2024]
// [14] Google. "Manage Users in Firebase." Firebase. Accessed: May 01, 2024. [Online]. Available: https://firebase.google.com