import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../Global';
import AppHeader from '../Components/AppHeader';
import TableItem from '../Components/TableItem';
import BookingTableModal from '../Components/BookingTableModal';
import TableDetailsModal from '../Components/TableDetailsModal';
import {useDispatch, useSelector} from 'react-redux';
import {bookTable, vacateTable} from '../Redux/action/tableAction';
import SecondaryButton from '../Components/SecondaryButton';
import auth from '@react-native-firebase/auth';

export default function Home(props) {
  const dispatch = useDispatch();
  const tablesDataRedux = useSelector(state => state?.tableReducer?.tablesList);
  const [handleBookingModalVisibility, sethandleBookingModalVisibility] =
    useState(false);
  const [handleVacateTableVisibility, sethandleVacateTableVisibility] =
    useState(false);
  const [tabelInfo, settabelInfo] = useState(null);
  const handleTableOnPress = data => {
    settabelInfo(data);
    if (data.status == 'o') {
      sethandleVacateTableVisibility(true);
    } else if (data.status == 'f') {
      sethandleBookingModalVisibility(true);
    }
  };
  const handleBookingModalVisibilityFun = data => {
    if (data) {
      let temp = {
        ...tabelInfo,
        status: 'o',
        booking: data,
        index: tabelInfo.id,
      };
      dispatch(bookTable(temp));
    }
    sethandleBookingModalVisibility(!handleBookingModalVisibilityFun);
  };
  const handleTabelDetailsModalVisibilityFun = data => {
    if (data) {
      let temp = {
        ...data,
        status: 'f',
        booking: null,
        index: data.id,
      };
      dispatch(vacateTable(temp));
    }
    sethandleVacateTableVisibility(!handleTabelDetailsModalVisibilityFun);
  };

  const renderTableItem = ({item, index}) => {
    return (
      <TableItem
        key={index}
        data={item}
        handleTableOnPress={handleTableOnPress}
      />
    );
  };
  return (
    <View style={[GlobalStyles.mainView, styles.mainView]}>
      <BookingTableModal
        visible={handleBookingModalVisibility}
        handleVisibility={handleBookingModalVisibilityFun}
        data={tabelInfo}
      />
      <TableDetailsModal
        visible={handleVacateTableVisibility}
        handleVisibility={handleTabelDetailsModalVisibilityFun}
        data={tabelInfo}
        vacateTabel={handleTabelDetailsModalVisibilityFun}
      />
      <AppHeader label={'Home'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tablesDataRedux}
        numColumns={2}
        renderItem={renderTableItem}
      />
      <SecondaryButton
        label={'SignOut'}
        onPress={() => {
          auth().signOut();
          props.navigation.replace('Login');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
  },
});
