import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors, AppFontSize, WINDOW_WIDTH} from '../Global';
import Feather from 'react-native-vector-icons/Feather';

export default function AppHeader({left, label, right,rightOnPress}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.sideView}>{/* <Text>left</Text> */}</View>
      <Text style={styles.labelStyles}>{label}</Text>
      <View style={[styles.sideView,{alignItems:'flex-end',paddingRight:10}]}>
        {right && (
          <TouchableOpacity onPress={rightOnPress}>
            <Feather name={'activity'} size={25} color={'black'} />
          </TouchableOpacity>
        )}
        {/* <Text>right</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: WINDOW_WIDTH,
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-between',
    backgroundColor: AppColors.backgroundColor,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    // alignContent:'space-between'
    paddingHorizontal: 5,
  },
  labelStyles: {
    color: AppColors.primaryText,
    fontSize: AppFontSize.regular,
    fontWeight: '700',
  },
  sideView: {
    width: '30%',
    // backgroundColor: 'pink',
  },
});
