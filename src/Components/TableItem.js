export default function TableItem({data, handleTableOnPress}) { // Declaring TableItem functional component. Props are passed as arguments.
  return (
    <TouchableOpacity onPress={() => handleTableOnPress(data)}> {/* Render TouchableOpacity with onPress event handler. */}
      <View style={styles.mainView}> {/* Render a View with local styles. */}
        <View style={styles.iconContainer}> {/* Render a View for icon with local styles. */}
          <MaterialIcons name="group" size={RFValue(20)} color="#000" /> {/* Render MaterialIcons with specified name, size, and color. */}
          <Text style={styles.tabelePersonsText}>: {data.persons}</Text> {/* Render text with local styles and table persons data. */}
        </View>
        <View // Render a View for table ID with dynamic background color based on table status.
          style={[
            styles.roundView,
            {
              backgroundColor:
                data.status == 'o'
                  ? AppColors.occupiedTable
                  : data.status == 'f'
                  ? AppColors.freeTable
                  : AppColors.reserveTable,
            },
          ]}>
          <Text style={styles.labelText}>{data.id}</Text> {/* Render table ID with local styles. */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ // Declaring StyleSheet for local styles.
  mainView: { // Defining style for mainView.
    width: WINDOW_WIDTH * 0.4, // Setting width based on WINDOW_WIDTH constant.
    backgroundColor: '#fff', // Setting background color.
    marginLeft: 1, // Setting left margin.
    height: WINDOW_WIDTH * 0.4, // Setting height based on WINDOW_WIDTH constant.
    margin: 4, // Setting margin.
    justifyContent: 'center', // Justifying content to the center.
    alignItems: 'center', // Aligning items to the center.
    shadowColor: '#000', // Setting shadow color.
    shadowOffset: { // Setting shadow offset.
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Setting shadow opacity.
    shadowRadius: 3.84, // Setting shadow radius.
    elevation: 5, // Setting elevation.
  },
  labelText: { // Defining style for labelText.
    color: AppColors.secondaryText, // Setting text color based on AppColors constant.
    fontWeight: 'bold', // Setting font weight to bold.
    fontSize: AppFontSize.large, // Setting font size based on AppFontSize constant.
  },
  roundView: { // Defining style for roundView.
    width: '50%', // Setting width.
    height: '50%', // Setting height.
    borderRadius: 50, // Setting border radius to make it round.
    justifyContent: 'center', // Justifying content to the center.
    alignItems: 'center', // Aligning items to the center.
  },
  iconContainer: { // Defining style for iconContainer.
    flexDirection: 'row', // Setting flexDirection to row.
    alignSelf: 'flex-end', // Aligning self to flex-end.
    paddingHorizontal: 5, // Setting horizontal padding.
    alignItems: 'center', // Aligning items to the center.
  },
  tabelePersonsText: { // Defining style for tabelePersonsText.
    color: AppColors.primaryText, // Setting text color based on AppColors constant.
    fontSize: AppFontSize.regular, // Setting font size based on AppFontSize constant.
  },
});
