import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global';

export default function TextInputComp({label, placeholder,onChangeVal,secureTextEnty=false}) {
  return (
    <View style={styles.mainView}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.textInputStyle} onChangeText={onChangeVal} secureTextEntry={secureTextEnty} />
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
    fontSize:AppFontSize.regular,
    marginBottom:5
  },
});
