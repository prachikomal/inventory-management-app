import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../src/redux/InventorySlice';

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});

export default store;
