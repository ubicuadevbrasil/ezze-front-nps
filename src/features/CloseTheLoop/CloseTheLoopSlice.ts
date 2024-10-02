import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CloseTheLoopAPI } from './CloseTheLoopAPI';

export interface CloseTheLoop {
  id: number;
  name: string;
  description: string;
}

interface CloseTheLoopState {
  items: CloseTheLoop[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CloseTheLoopState = {
  items: [],
  status: 'idle',
};

export const fetchCloseTheLoopsAsync = createAsyncThunk(
  'CloseTheLoop/fetchCloseTheLoops',
  async () => {
    const response = await CloseTheLoopAPI.fetchAll();
    return response.data;
  }
);

export const createCloseTheLoopAsync = createAsyncThunk(
  'CloseTheLoop/createCloseTheLoop',
  async (newItem: CloseTheLoop) => {
    const response = await CloseTheLoopAPI.create(newItem);
    return response.data;
  }
);

export const updateCloseTheLoopAsync = createAsyncThunk(
  'CloseTheLoop/updateCloseTheLoop',
  async (updatedItem: CloseTheLoop) => {
    const response = await CloseTheLoopAPI.update(updatedItem.id, updatedItem);
    return response.data;
  }
);

export const deleteCloseTheLoopAsync = createAsyncThunk(
  'CloseTheLoop/deleteCloseTheLoop',
  async (id: number) => {
    await CloseTheLoopAPI.delete(id);
    return id;
  }
);

const CloseTheLoopSlice = createSlice({
  name: 'CloseTheLoop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCloseTheLoopsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCloseTheLoopsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(createCloseTheLoopAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCloseTheLoopAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteCloseTheLoopAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default CloseTheLoopSlice.reducer;