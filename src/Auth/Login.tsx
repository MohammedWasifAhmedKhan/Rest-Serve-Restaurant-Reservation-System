import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global';
import TextInputComp from '../Components/TextInputComp';
import MainButton from '../Components/MainButton';
import auth from '@react-native-firebase/auth';
const Buffer = require('buffer').Buffer;
export default function Login(props: any) {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
   if(auth().currentUser){
    // auth().signOut()
    // console.log('auth().currentUser', auth().currentUser)
    props.navigation.replace('Home');
   }
  }, [])
  
  const handleLogin = () => {
    try {
      if (!email || !password) {
        // @ts-ignore
        alert('Fill all fields');
        return;
      }
      setloading(true);
      let encryptedPassword = new Buffer(password).toString('base64');

      auth()
        .signInWithEmailAndPassword(email, encryptedPassword)
        .then(res => {
          setloading(false);

          props.navigation.replace('Home');
        })
        .catch(err => {
          if (err.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            // @ts-ignore
            alert('Email address is invalid!');
          }
          if (err.code === 'auth/invalid-credential') {
            console.log('The supplied auth credential is incorrect');
            // @ts-ignore
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
        secureTextEnty={true}
      />
      <View style={styles.signUpMainView}>
        <Text style={styles.dontHaveText}>Dont have an Account? </Text>
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
