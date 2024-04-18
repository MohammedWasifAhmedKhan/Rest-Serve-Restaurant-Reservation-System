import {StyleSheet, Text, View} from 'react-native'; // [1] [4] Importing necessary components from React Native library.
import React from 'react'; // [2] Importing React library to use JSX syntax.
import {GlobalStyles} from '../Global'; // Importing custom global styles.
import TextInputComp from '../Components/TextInputComp'; // [3] Importing custom TextInput component.
import MainButton from '../Components/MainButton'; // Importing custom MainButton component.

export default function Register(props: any) { // Declaring Register functional component. Props are passed as argument to this component.
  const handleRegister = () => { // [5] Declaring handleRegister arrow function.
    props.navigation.navigate('Home'); // [6] Navigating to 'Home' screen using props.
  };
  return (
    <View style={[GlobalStyles.mainView, GlobalStyles.alignCenter]}> {/* [1] Rendering a View with global styles. */}
      <Text style={GlobalStyles.mainLabel}>Register</Text> {/* [7] Rendering text with global styles. */}
      <TextInputComp label={'Enter First Name'} placeholder={'Enter First Name'} /> {/* Rendering custom TextInput component for first name input. */}
      <TextInputComp label={'Enter Last Name'} placeholder={'Enter Last Name'} /> {/* Rendering custom TextInput component for last name input. */}
      <TextInputComp label={'Enter Email'} placeholder={'Enter Email'} /> {/* Rendering custom TextInput component for email input. */}
      <TextInputComp label={'Enter Password'} placeholder={'Enter Password'} /> {/* Rendering custom TextInput component for password input. */}
      <TextInputComp label={'Confirm Password'} placeholder={'Confirm Password'} /> {/* Rendering custom TextInput component for confirming password input. */}
      <MainButton loading={false} label={'Register'} onPress={handleRegister} /> {/* Rendering custom MainButton component for register action. */}
    </View>
  );
}

const styles = StyleSheet.create({}); // [8] Declaring StyleSheet for local styles.

// - ES6+ Features: arrow functions are used in defining handleRegister function.
// Functions: handleRegister function is defined to handle registration process.
// Arrays & Objects: No explicit usage of arrays or objects in this code.
// React.js Core Concepts:
// - Components: Register is a functional component, TextInputComp, and MainButton are custom components imported and used.
// - JSX: JSX syntax is used to define UI elements.
// - Props & State: props are passed to Register component.
// - Rendering: UI elements are rendered within the return statement.
// Additional Considerations:
// - Event Handling: Event handling is implemented for onPress event of MainButton.
// - Conditional Rendering: No explicit conditional rendering is implemented in this code snippet.
// - Libraries and Frameworks: State management libraries like Redux or MobX are not used in this code snippet.

// REFERENCES:

// [1] “View · React Native.” [Online]. Available: https://reactnative.dev/docs/view. [Accessed: 17-Apr-2024]
// [2] “React Top-Level API – React.” [Online]. Available: https://legacy.reactjs.org/docs/react-api.html. [Accessed: 17-Apr-2024]
// [3] “TextInput · React Native.” [Online]. Available: https://reactnative.dev/docs/textinput. [Accessed: 17-Apr-2024]
// [4] “TouchableOpacity · React Native.” [Online]. Available: https://reactnative.dev/docs/touchableopacity. [Accessed: 17-Apr-2024]
// [5] MDN. "Arrow function expressions - JavaScript | MDN." MDN Web Docs. Accessed: Apr. 17, 2024. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// [6] “Moving between screens | React Navigation.” [Online]. Available: https://reactnavigation.org/docs/navigating/. [Accessed: 17-Apr-2024]
// [7] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]
// [8] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]

