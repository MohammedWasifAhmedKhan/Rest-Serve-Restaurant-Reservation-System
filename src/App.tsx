// Importing React library for creating components.
import React from 'react';
// [1] Importing 'react-native-gesture-handler' for gesture handling.
import 'react-native-gesture-handler';
// Importing the Routes component from the Navigation file. 
import Routes from './Navigation';
// [2] Importing Provider from 'react-redux' for Redux state management.
import {Provider} from 'react-redux'; 
// Importing PersistGate for Redux state persistence.
import {PersistGate} from 'redux-persist/integration/react'; 
// Importing the Redux store and persistor.
import {store, persistor} from './Redux/store';
// [3] Importing SafeAreaView for handling safe areas.
import {SafeAreaView} from 'react-native-safe-area-context'; 
// Declaring the App functional component.
export default function App() {
  return (
    // Providing Redux store to the application, then persisting Redux state using PersistGate. SafeAreaView used for handling safe areas followed by rendering of the Routes component for navigation.
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}> 
          <Routes />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

// REFERENCES:
// [1] https://github.com/software-mansion/react-native-gesture-handler
// [2] https://react-redux.js.org/api/provider
// [3] https://github.com/react-navigation/react-native-safe-area-view