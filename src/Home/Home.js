import {FlatList, StyleSheet, Text, View} from 'react-native'; // Importing necessary components from React Native library.
import React, {useState} from 'react'; // Importing React library and useState hook.
import {GlobalStyles} from '../Global'; // Importing custom global styles.
import AppHeader from '../Components/AppHeader'; // Importing AppHeader component.
import TableItem from '../Components/TableItem'; // Importing TableItem component.
import BookingTableModal from '../Components/BookingTableModal'; // Importing BookingTableModal component.
import TableDetailsModal from '../Components/TableDetailsModal'; // Importing TableDetailsModal component.
import {useDispatch, useSelector} from 'react-redux'; // Importing useDispatch and useSelector hooks from Redux.
import {bookTable, vacateTable} from '../Redux/action/tableAction'; // Importing Redux actions.

export default function Home() { // Declaring Home functional component.
  const dispatch = useDispatch(); // Initializing useDispatch hook.
  const tablesDataRedux = useSelector(state => state?.tableReducer?.tablesList); // Fetching tables data from Redux store.
  const [handleBookingModalVisibility, sethandleBookingModalVisibility] = useState(false); // State for booking modal visibility.
  const [handleVacateTableVisibility, sethandleVacateTableVisibility] = useState(false); // State for vacating table modal visibility.
  const [tabelInfo, settabelInfo] = useState(null); // State for storing table information.

  const handleTableOnPress = data => { // Function to handle table press events.
    settabelInfo(data); // Setting table information.
    if (data.status == 'o') { // Checking if table is occupied.
      sethandleVacateTableVisibility(true); // Showing vacate table modal.
    } else if (data.status == 'f') { // Checking if table is free.
      sethandleBookingModalVisibility(true); // Showing booking modal.
    }
  };

  const handleBookingModalVisibilityFun = data => { // Function to handle booking modal visibility.
    if (data) { // Checking if booking data exists.
      let temp = { // Creating temporary object with updated booking information.
        ...tabelInfo,
        status: 'o',
        booking: data,
        index: tabelInfo.id,
      };
      dispatch(bookTable(temp)); // Dispatching action to book table.
    }
    sethandleBookingModalVisibility(!handleBookingModalVisibilityFun); // Toggling booking modal visibility.
  };

  const handleTabelDetailsModalVisibilityFun = data => { // Function to handle table details modal visibility.
    if(data){ // Checking if data exists.
      let temp = { // Creating temporary object with updated table details.
        ...data,
        status: 'f',
        booking: null,
        index: data.id,
      };
      dispatch(vacateTable(temp)); // Dispatching action to vacate table.
    }
    sethandleVacateTableVisibility(!handleTabelDetailsModalVisibilityFun); // Toggling table details modal visibility.
  };

  const renderTableItem = ({item, index}) => { // Function to render table item.
    return (
      <TableItem
        key={index}
        data={item}
        handleTableOnPress={handleTableOnPress}
      />
    );
  };

  return (
    <View style={[GlobalStyles.mainView, styles.mainView]}> {/* Rendering a View with combined global and local styles. */}
      <BookingTableModal // Rendering BookingTableModal component.
        visible={handleBookingModalVisibility}
        handleVisibility={handleBookingModalVisibilityFun}
        data={tabelInfo}
      />
      <TableDetailsModal // Rendering TableDetailsModal component.
        visible={handleVacateTableVisibility}
        handleVisibility={handleTabelDetailsModalVisibilityFun}
        data={tabelInfo}
        vacateTabel={handleTabelDetailsModalVisibilityFun}
      />
      <AppHeader label={'Home'} /> {/* Rendering AppHeader component with 'Home' label. */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tablesDataRedux} // Passing tables data to FlatList.
        numColumns={2} // Displaying FlatList items in 2 columns.
        renderItem={renderTableItem} // Rendering each item in the FlatList using renderTableItem function.
      />
    </View>
  );
}

const styles = StyleSheet.create({ // Declaring StyleSheet for local styles.
  mainView: { // Defining style for mainView.
    alignItems: 'center', // Aligning items to the center.
  },
});
