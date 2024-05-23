import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// Choose the storage engine
import storage from 'redux-persist/lib/storage'; 
// Importing root reducer
import rootReducer from './reducers'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  // Specifying the reducers to persist
  storage: AsyncStorage,  
  // In this example, we persist the 'user' reducer
  whitelist: ['userReducer','tableReducer','waitlistReducer'], 
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);