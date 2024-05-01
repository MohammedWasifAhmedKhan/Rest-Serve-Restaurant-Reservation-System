// [1] Importing necessary components and modules from 'react-native' and other libraries
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react'; // [2]
import {GlobalStyles} from '../Global'; // Importing global styles from the Global module
import TextInputComp from '../Components/TextInputComp'; // [3] Custom TextInput component
import MainButton from '../Components/MainButton'; // Custom button component
import firestore from '@react-native-firebase/firestore'; // [8] Firebase Firestore for database operations
import auth from '@react-native-firebase/auth'; // [9] Firebase Auth for authentication

// Importing Buffer from the 'buffer' module to handle binary data (used here for password encoding) [10]
const Buffer = require('buffer').Buffer; 

// Functional component definition for 'Register' with props passed as a parameter
export default function Register(props: any) {
  // State hooks for managing the input values and loading state
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [password, setpassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [email, setemail] = useState(null);
  const [loading, setloading] = useState(false);

  // Function to handle the registration process [5]
  const handleRegister = () => {
    try {
      // Validation to ensure all fields are filled
      if (!firstName || !lastName || !email || !password) {
        alert('Fill all fields');
        return;
      }
      // Checking if the password and confirmation password match
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      setloading(true); // Set loading state to true during the registration process
      let encryptedPassword = new Buffer(password).toString('base64'); // Encrypting the password
      console.log('encryptedPassword', encryptedPassword);
      let tempdata = {
        firstName,
        lastName,
        email,
        password: encryptedPassword,
      };
      // Using Firebase Auth to create a new user with email and encrypted password
      auth()
        .createUserWithEmailAndPassword(email, encryptedPassword) // [11]
        .then(() => {
          // If the user is created, add their details to Firestore under 'Users' collection
          firestore()
          .collection('Users')
          .add(tempdata)
          .then(() => {
              setloading(false); // Reset loading state
              props.navigation.replace('Home'); // [6] Navigate to Home screen
              console.log('User added to firestore!');
            });
          console.log('User account created & signed in!');
        })
        .catch(error => {
          setloading(false); // Reset loading state on error
          // Handling specific authentication errors
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            alert('That email address is invalid!');
          }
          console.error(error);
        });
    } catch (error) {
      setloading(false); // Ensure loading state is reset if an exception occurs
    }
  };

  // Render method showing the user interface
  return (
    <View style={[GlobalStyles.mainView, GlobalStyles.alignCenter]}>
      <Text style={GlobalStyles.mainLabel}>Register</Text> 
      <TextInputComp
        label={'Enter First Name'}
        placeholder={'Enter First Name'}
        onChangeVal={setfirstName}
      />
      <TextInputComp
        label={'Enter Last Name'}
        placeholder={'Enter Last Name'}
        onChangeVal={setlastName}
      />
      <TextInputComp
        label={'Enter Email'}
        placeholder={'Enter Email'}
        onChangeVal={setemail}
      />
      <TextInputComp
        label={'Enter Password'}
        placeholder={'Enter Password'}
        onChangeVal={setpassword}
        secureTextEnty={true}
      />
      <TextInputComp
        label={'Confirm Password'}
        placeholder={'Confirm Password'}
        onChangeVal={setconfirmPassword}
        secureTextEnty={true}
      />
      <MainButton loading={loading} label={'Register'} onPress={handleRegister} />
    </View>
  );
}

// Stylesheet for the component [7]
const styles = StyleSheet.create({});

// REFERENCES:

// [1] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [2] “React Top-Level API – React.” [Online]. Available: https://legacy.reactjs.org/docs/react-api.html. [Accessed: 17-Apr-2024]
// [3] “TextInput · React Native.” [Online]. Available: https://reactnative.dev/docs/textinput. [Accessed: 17-Apr-2024]
// [4] “TouchableOpacity · React Native.” [Online]. Available: https://reactnative.dev/docs/touchableopacity. [Accessed: 17-Apr-2024]
// [5] MDN. "Arrow function expressions - JavaScript | MDN." MDN Web Docs. Accessed: Apr. 17, 2024. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// [6] “Moving between screens | React Navigation.” [Online]. Available: https://reactnavigation.org/docs/navigating/. [Accessed: 17-Apr-2024]
// [7] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [8] “Cloud Firestore.” [Online]. Available: https://rnfirebase.io/firestore/usage. [Accessed: 01-May-2024]
// [9] “Authentication.” [Online]. Available: https://rnfirebase.io/auth/usage. [Accessed: 01-May-2024]
// [10] “Node.js Buffer Module.” [Online]. Available: https://www.w3schools.com/nodejs/ref_buffer.asp. [Accessed: 01-May-2024]
// [11] Google. "Manage Users in Firebase." Firebase. Accessed: May 01, 2024. [Online]. Available: https://firebase.google.com/docs/auth/web/manage-users