import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../Global';
import TextInputComp from '../Components/TextInputComp';
import MainButton from '../Components/MainButton';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const Buffer = require('buffer').Buffer;
export default function Register(props: any) {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [password, setpassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [email, setemail] = useState(null);
  const [loading, setloading] = useState(false);
  const handleRegister = () => {
    try {
      if (!firstName || !lastName || !email || !password) {
        // @ts-ignore
        alert('Fill all fields');
        return;
      }
      if (password !== confirmPassword) {
        // @ts-ignore
        alert('Passwords do not match');
        return;
      }
      setloading(true);
      let encryptedPassword = new Buffer(password).toString('base64');
      console.log('encryptedPassword', encryptedPassword);
      let tempdata = {
        firstName,
        lastName,
        email,
        password: encryptedPassword,
      };
      auth()
        .createUserWithEmailAndPassword(email, encryptedPassword)
        .then(() => {
          firestore()
          .collection('Users')
          .add(tempdata)
          .then(() => {
              setloading(false);
              props.navigation.replace('Home');
              console.log('User added to firestore!');
            });
          console.log('User account created & signed in!');
        })
        .catch(error => {
          setloading(false);
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            // @ts-ignore
            alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            // @ts-ignore
            alert('That email address is invalid!');
          }
          console.error(error);
        });
      //
    } catch (error) {
      setloading(false);
    }
  };
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

const styles = StyleSheet.create({});
