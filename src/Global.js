// [1] [2] Importing necessary components from React Native library.
import {Dimensions, StyleSheet} from 'react-native'; 
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const AppColors = {
  backgroundColor: '#fff',
  primaryText: '#000',
  secondaryText: '#fff',
  buttonPrimary: '#338fff',
  freeTable: '#1aff00',
  occupiedTable: '#ff0011',
  reserveTable: '#111df7',
};

export const AppFontSize = {
  small: RFValue(10),
  regular: RFValue(12),
  medium: RFValue(17),
  large: RFValue(27),
};

// [2] Getting the window width.
export const WINDOW_WIDTH = Dimensions.get('window').width; 
// [2] Getting the window height.
export const WINDOW_HEIGHT = Dimensions.get('window').height; 
// [1] Creating global styles using StyleSheet.
export const GlobalStyles = StyleSheet.create({ 
  mainView: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainLabel: {
    fontSize: AppFontSize.large,
    color: AppColors.primaryText,
  },
  modalMainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContentView: {
    width: WINDOW_WIDTH * 0.8,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: AppFontSize.medium,
    color: AppColors.primaryText,
    width: WINDOW_WIDTH * 0.6,
    alignSelf: 'center',
    marginBottom: 10,
    textAlign: 'center',
  },
});


//REFERENCES:
// [1] “StyleSheet · React Native.” [Online]. Available: https://reactnative.dev/docs/stylesheet. [Accessed: 17-Apr-2024]
// [2] "Dimensions - React Native." [Online]. Available: https://reactnative.dev/docs/dimensions. [Accessed: 18-Apr-2024]