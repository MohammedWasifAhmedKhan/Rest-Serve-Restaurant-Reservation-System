import { StyleSheet, Text, View } from 'react-native'; // [1] [2] Importing necessary components from React Native library.
import React from 'react'; // Importing React library for creating components.

export default function index() { // Declaring a functional component named 'index'.
  return (
    <View> {/* Rendering a View component */}
      <Text>index</Text> {/* [2] Rendering a Text component with the text 'index' */}
    </View>
  );
}

const styles = StyleSheet.create({}); // [1] Declaring an empty StyleSheet object for styling components.

// REFERENCES:
// [1] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [2] “Text · React Native.” [Online]. Available: https://reactnative.dev/docs/text. [Accessed: 17-Apr-2024]

