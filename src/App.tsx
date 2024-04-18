import React from 'react'; // Importing React library for creating components.
import 'react-native-gesture-handler'; // Importing 'react-native-gesture-handler' for gesture handling.
import Routes from './Navigation'; // Importing the Routes component from the Navigation file.
import {Provider} from 'react-redux'; // Importing Provider from 'react-redux' for Redux state management.
import {PersistGate} from 'redux-persist/integration/react'; // Importing PersistGate for Redux state persistence.
import {store, persistor} from './Redux/store'; // Importing the Redux store and persistor.
import {SafeAreaView} from 'react-native-safe-area-context'; // Importing SafeAreaView for handling safe areas.

export default function App() { // Declaring the App functional component.
  return (
    <Provider store={store}> {/* Providing Redux store to the application */}
      <PersistGate loading={null} persistor={persistor}> {/* Persisting Redux state using PersistGate */}
        <SafeAreaView style={{flex: 1, paddingTop: 40}}> {/* Using SafeAreaView for handling safe areas */}
          <Routes /> {/* Rendering the Routes component for navigation */}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
