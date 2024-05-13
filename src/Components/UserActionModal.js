import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../Global';
import SecondaryButton from './SecondaryButton';
export default function UserActionModal({
  visible,
  handleVisibility,
  action1,
  action2,
}) {
  return (
    <Modal visible={visible} transparent onDismiss={handleVisibility}>
      <View style={GlobalStyles.modalMainView}>
        <View style={GlobalStyles.modalContentView}>
          <SecondaryButton onPress={action1} label={'Reduce Time / Vacate'} />
          <SecondaryButton onPress={action2} label={'Add to waitlist'} />
          <SecondaryButton onPress={handleVisibility} label={'Close'} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  listMainItem: {
    backgroundColor: 'lightgray',
    padding: 5,
    paddingVertical: 7,
  },
  mainTouchAbleStyle: {
    marginBottom: 5,
  },
});
