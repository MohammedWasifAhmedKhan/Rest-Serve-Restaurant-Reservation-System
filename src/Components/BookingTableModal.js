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
import {useSelector} from 'react-redux';
export default function BookingTableModal({visible, handleVisibility, data}) {
  console.log('data', data);
  const reduxState = useSelector(state => state?.waitlistReducer?.waitList);
  console.log('reduxState', reduxState);
  const renderWaitListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.mainTouchAbleStyle}
        onPress={() => handleVisibility(item)}>
        <View key={index} style={styles.listMainItem}>
          <Text>
            Booking by: {item.booking} (
            {`Adults :${item.adults} Children :${item.children}`})
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Modal visible={visible} transparent onDismiss={handleVisibility}>
      <View style={GlobalStyles.modalMainView}>
        <View style={GlobalStyles.modalContentView}>
          <Text style={GlobalStyles.modalHeading}>Select From Waitlist</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={
              reduxState.filter(item => item.persons == data?.persons) ?? []
            }
            renderItem={renderWaitListItem}
            ListEmptyComponent={() => {
              return (
                <Text style={{color:'lightgray'}}>No booking data available for selected table type</Text>
              );
            }}
          />
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
