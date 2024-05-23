import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles, WINDOW_WIDTH} from '../Global';
import SecondaryButton from './SecondaryButton';
import DropDownPicker from 'react-native-dropdown-picker';
import TablesData from '../Tables.json';
import TextInputComp from './TextInputComp';
export default function TableTimeReducerModal({
  visible,
  handleVisibility,
  action1,
}) {
  const [selectedTable, setselectedTable] = useState(null);
  const [enteredTime, setenteredTime] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const emptyValues = () => {
    setTimeout(() => {
        // console.log('reseting values');
      setselectedTable(null);
      setenteredTime(null);
      setValue(null)
    }, 1000);
  };
  const dataItem = [
    {id: 1, label: '2 person table', value: 2},
    {id: 2, label: '4 person table', value: 4},
    {id: 3, label: '6 person table', value: 6},
    {id: 4, label: '8 person table', value: 8},
  ];

  return (
    <Modal visible={visible} transparent onDismiss={handleVisibility}>
      <View style={GlobalStyles.modalMainView}>
        <View
          style={[GlobalStyles.modalContentView, {width: WINDOW_WIDTH * 0.85}]}>
          <DropDownPicker
            open={open}
            value={value}
            items={dataItem}
            setOpen={setOpen}
            setValue={setValue}
            onSelectItem={item => {
              setselectedTable(item);
            }}
          />
          <TextInputComp
            label={'Enter Time'}
            placeholder={'1 minute'}
            onChangeVal={setenteredTime}
            keyboardType={'number-pad'}
          />
          <SecondaryButton
          // This function defines what happens when the 'Reduce Time' button is pressed. 
            onPress={() => {  
              if (!selectedTable || !enteredTime) {
                // If either a table not selected from the dropdown or if the time to reduce is not provided, it alerts the user to make a selection or enter time.
                alert('Please select table and enter time');  
                return;
              }
              // 'action1' handles the reduction of time with the given inputs (table and time). 
              action1({table: selectedTable?.value, time: enteredTime}); ; 
              // Called after executing action1 to reset the form inputs, clearing any selected table and entered time, ensuring the form is clean for the next interaction. 
              emptyValues();  
            }}
            label={'Reduce Time'}
          />
          <SecondaryButton
            label={'Vacate'}
            onPress={() => {
              // If a table not selected from the dropdown, it alerts the user to make a selection. 
              if (!selectedTable) {  
                alert('Please select a table to vacate ');
                return;
              }
              // 'action1' vacates the selected table based on its value.
              action1({table: selectedTable?.value});  
              // Called after executing action1 to reset the form inputs, clearing any selected table and entered time, ensuring the form is clean for the next interaction. 
              emptyValues();  
            }}
          />
          <SecondaryButton
            onPress={() => {
              handleVisibility();
              emptyValues();
            }}
            label={'Close'}
          />
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
