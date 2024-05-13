import React from 'react';
import 'react-native-gesture-handler'; // [1] Importing 'react-native-gesture-handler' for gesture handling.
import Routes from './Navigation';
import {Provider} from 'react-redux'; // [2] Importing Provider from 'react-redux' for Redux state management.
import {PersistGate} from 'redux-persist/integration/react'; // Import PersistGate
import {store, persistor} from './Redux/store';
import {SafeAreaView} from 'react-native-safe-area-context'; // [3] Importing SafeAreaView for handling safe areas.
export default function App() {
  return (
    <Provider store={store}> {/* [2] Providing Redux store to the application */}
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}> {/* [3] Using SafeAreaView for handling safe areas */}
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