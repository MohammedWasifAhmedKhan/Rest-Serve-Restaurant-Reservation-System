import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColors, AppFontSize, GlobalStyles, WINDOW_WIDTH} from '../Global';
import SecondaryButton from './SecondaryButton';
import DropDownPicker from 'react-native-dropdown-picker';
import TextInputComp from './TextInputComp';
import {useDispatch} from 'react-redux';
import {addToWaitlist} from '../Redux/action/waitlistAction';
export default function AddTowWaitListModal({
  visible,
  handleVisibility,
  action1,
}) {
  const dispatch = useDispatch();
  const [selectedTable, setselectedTable] = useState(null);
  const [enteredTime, setenteredTime] = useState(null);
  const [value, setValue] = useState(null);

  const [children, setchildren] = useState(0);
  const [adults, setadults] = useState(0);
  const [tableType, settableType] = useState(null);
  const [bookingName, setbookingName] = useState(null);

  const [open, setOpen] = useState(false);
  const dataItem = [
    {id: 1, label: '2 person table', value: 2},
    {id: 2, label: '4 person table', value: 4},
    {id: 3, label: '6 person table', value: 6},
    {id: 4, label: '8 person table', value: 8},
  ];
  const handleBooking = () => {
    if (!bookingName) {
      alert('Please enter booking name');
      return;
    }
    if (!tableType) {
      alert('Please select table');
      return;
    }
    if (!adults) {
      alert('Please enter number of adults');
    }
    if (children < 0 || adults < 0) {
      alert('Please enter valid number of children and adults');
    }
    let temp = {
      id: Date.now(),
      persons: parseInt(adults) + parseInt(children),
      adults: adults,
      children: children,
      booking: bookingName,
    };
    console.log('temp', temp);
    alert('Added to waitlist')
    dispatch(addToWaitlist(temp));
    handleVisibility();
  };
  return (
    <Modal visible={visible} transparent onDismiss={handleVisibility}>
      <View style={GlobalStyles.modalMainView}>
        <View
          style={[GlobalStyles.modalContentView, {width: WINDOW_WIDTH * 0.85}]}>
          <TextInputComp
            label={'Booking name'}
            placeholder={'John Doe'}
            onChangeVal={setbookingName}
          />
          <TextInputComp
            label={'Enter Number of Adults'}
            placeholder={'2'}
            onChangeVal={setadults}
            keyboardType={'number-pad'}
          />
          <TextInputComp
            label={'Enter Number of Children'}
            placeholder={'2'}
            onChangeVal={setchildren}
            keyboardType={'number-pad'}
          />
          <Text style={styles.labelText}>{'Select Table'}</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={dataItem}
            setOpen={setOpen}
            setValue={setValue}
            placeholder="Select Table"
            onSelectItem={item => {
              settableType(item);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: WINDOW_WIDTH * 0.75,
            }}>
            <SecondaryButton
              onPress={() => {
                handleVisibility();
              }}
              label={'Close'}
            />

            <SecondaryButton
              onPress={() => {
                handleBooking();
              }}
              label={'Add to waitlist'}
            />
          </View>
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
  labelText: {
    color: AppColors.primaryText,
    fontSize: AppFontSize.regular,
    marginBottom: 5,
    width: WINDOW_WIDTH * 0.8,
  },
});
