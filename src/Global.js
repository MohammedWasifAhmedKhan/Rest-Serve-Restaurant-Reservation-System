import {Dimensions, StyleSheet} from 'react-native'; // Importing necessary components from React Native library.
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'; // Importing responsive font size utilities.

export const AppColors = { // Defining colors for the application.
  backgroundColor: '#fff', // Background color.
  primaryText: '#000', // Primary text color.
  secondaryText: '#fff', // Secondary text color.
  buttonPrimary: '#338fff', // Primary button color.
  freeTable: '#1aff00', // Color for free tables.
  occupiedTable: '#ff0011', // Color for occupied tables.
  reserveTable: '#111df7', // Color for reserved tables.
};

export const AppFontSize = { // Defining font sizes for the application.
  small: RFValue(10), // Small font size.
  regular: RFValue(12), // Regular font size.
  medium: RFValue(17), // Medium font size.
  large: RFValue(27), // Large font size.
};

export const WINDOW_WIDTH = Dimensions.get('window').width; // Getting the window width.
export const WINDOW_HEIGHT = Dimensions.get('window').height; // Getting the window height.

export const GlobalStyles = StyleSheet.create({ // Creating global styles using StyleSheet.
  mainView: { // Main view style.
    flex: 1, // Takes up all available space.
    backgroundColor: AppColors.backgroundColor, // Background color.
  },
  alignCenter: { // Center alignment style.
    alignItems: 'center', // Align items in the center horizontally.
    justifyContent: 'center', // Justify content in the center vertically.
  },
  mainLabel: { // Style for main labels.
    fontSize: AppFontSize.large, // Large font size.
    color: AppColors.primaryText, // Primary text color.
  },
  modalMainView: { // Style for the main view of the modal.
    flex: 1, // Takes up all available space.
    justifyContent: 'center', // Center alignment vertically.
    alignItems: 'center', // Center alignment horizontally.
    backgroundColor: 'rgba(0,0,0,0.2)', // Semi-transparent background color.
  },
  modalContentView: { // Style for the content view of the modal.
    width: WINDOW_WIDTH * 0.8, // 80% of the window width.
    backgroundColor: '#fff', // Background color.
    borderRadius: 5, // Border radius.
    padding: 10, // Padding.
    alignItems:'center' // Center alignment.
  },
  modalHeading:{ // Style for modal headings.
    fontSize:AppFontSize.medium, // Medium font size.
    color:AppColors.primaryText, // Primary text color.
    width:WINDOW_WIDTH*0.6, // 60% of the window width.
    alignSelf:'center', // Align self at the center horizontally.
    marginBottom:10, // Bottom margin.
    textAlign:'center', // Text alignment to center.
  }
});
