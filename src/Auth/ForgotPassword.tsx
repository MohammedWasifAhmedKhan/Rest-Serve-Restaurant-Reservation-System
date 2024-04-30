import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global';
import TextInputComp from '../Components/TextInputComp';
import MainButton from '../Components/MainButton';
import auth from '@react-native-firebase/auth';

export default function ForgotPassword(props: any) {
  const [email, setemail] = useState(null);
  const [loading, setloading] = useState(false);
  const handleReset = () => {
    if (!email) {
      // @ts-ignore
      alert('Enter email');
      return;
    }
    setloading(true);
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setloading(false);

        // @ts-ignore
        alert('Password reset email sent!');
        props.navigation.navigate('Login');
      })
      .catch(err => {
        setloading(false);

        console.log('err', err);
        // @ts-ignore
        alert('Something went wrong! Try again later');
        props.navigation.navigate('Login');
      });
  };
  return (
    <View style={[GlobalStyles.mainView, GlobalStyles.alignCenter]}>
      <Text style={GlobalStyles.mainLabel}>Forgot Password</Text>
      <TextInputComp
        label={'Enter Email'}
        placeholder={'Enter Email'}
        onChangeVal={setemail}
      />
      <MainButton
        label={'Reset Password'}
        loading={loading}
        onPress={handleReset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signUpMainView: {
    width: WINDOW_WIDTH * 0.8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginVertical: 10,
    flexDirection: 'row',
  },
  signUpText: {
    fontWeight: 'bold',
    fontSize: AppFontSize.small,
    color: AppColors.primaryText,
  },
  dontHaveText: {
    color: AppColors.primaryText,
    fontSize: AppFontSize.small,
  },
});
