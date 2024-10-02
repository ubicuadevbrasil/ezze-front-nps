import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PendingSearchAPI } from './PendingSearchAPI';

export interface PendingSearch {
  id: number;
  name: string;
  description: string;
}

interface PendingSearchState {
  items: PendingSearch[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PendingSearchState = {
  items: [],
  status: 'idle',
};

export const fetchPendingSearchsAsync = createAsyncThunk(
  'PendingSearch/fetchPendingSearchs',
  async () => {
    const response = await PendingSearchAPI.fetchAll();
    return response.data;
  }
);

export const createPendingSearchAsync = createAsyncThunk(
  'PendingSearch/createPendingSearch',
  async (newItem: PendingSearch) => {
    const response = await PendingSearchAPI.create(newItem);
    return response.data;
  }
);

export const updatePendingSearchAsync = createAsyncThunk(
  'PendingSearch/updatePendingSearch',
  async (updatedItem: PendingSearch) => {
    const response = await PendingSearchAPI.update(updatedItem.id, updatedItem);
    return response.data;
  }
);

export const deletePendingSearchAsync = createAsyncThunk(
  'PendingSearch/deletePendingSearch',
  async (id: number) => {
    await PendingSearchAPI.delete(id);
    return id;
  }
);

const PendingSearchSlice = createSlice({
  name: 'PendingSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPendingSearchsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPendingSearchsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(createPendingSearchAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updatePendingSearchAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deletePendingSearchAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default PendingSearchSlice.reducer;