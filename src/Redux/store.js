import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine
import rootReducer from './reducers'; // Import your root reducer
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,  // Specify the reducers you want to persist
  whitelist: ['userReducer','tableReducer','waitlistReducer'], // In this example, we persist the 'user' reducer
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);