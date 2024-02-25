import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './InventorySlice';

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});

export default store;
