import { persistStore, persistReducer } from 'redux-persist'; // Importing persistStore and persistReducer from redux-persist library.
import storage from 'redux-persist/lib/storage'; // Choose your storage engine

import rootReducer from './reducers'; // Import your root reducer
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importing AsyncStorage for storage

const persistConfig = { // Configuring persist options
  key: 'root', // Key for the persist store
  storage: AsyncStorage,  // Specify the storage engine to be AsyncStorage
  whitelist: ['user','tableReducer'], // In this example, we persist the 'user' and 'tableReducer' reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Creating a persisted reducer using the root reducer and persist configuration

export const store = createStore(persistedReducer); // Creating the Redux store with the persisted reducer
export const persistor = persistStore(store); // Creating the persistor for the store
