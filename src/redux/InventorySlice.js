
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchInventory = createAsyncThunk(
  'inventory/fetchInventory',
  async () => {
    const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
    const data = await response.json();
    return data;
  }
);

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {
    deleteProduct: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(item => item.name === action.payload.name);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    toggleProduct: (state, action) => {
      const index = state.items.findIndex(item => item.name === action.payload);
      if (index !== -1) {
        state.items[index].disabled = !state.items[index].disabled;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { deleteProduct, updateProduct, toggleProduct } = inventorySlice.actions;

export default inventorySlice.reducer;
