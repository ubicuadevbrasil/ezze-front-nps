import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ClientDetailsAPI } from './ClientDetailsAPI';

export interface ClientDetails {
  id: number;
  name: string;
  description: string;
}

interface ClientDetailsState {
  items: ClientDetails[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ClientDetailsState = {
  items: [],
  status: 'idle',
};

export const fetchClientDetailssAsync = createAsyncThunk(
  'ClientDetails/fetchClientDetailss',
  async () => {
    const response = await ClientDetailsAPI.fetchAll();
    return response.data;
  }
);

export const createClientDetailsAsync = createAsyncThunk(
  'ClientDetails/createClientDetails',
  async (newItem: ClientDetails) => {
    const response = await ClientDetailsAPI.create(newItem);
    return response.data;
  }
);

export const updateClientDetailsAsync = createAsyncThunk(
  'ClientDetails/updateClientDetails',
  async (updatedItem: ClientDetails) => {
    const response = await ClientDetailsAPI.update(updatedItem.id, updatedItem);
    return response.data;
  }
);

export const deleteClientDetailsAsync = createAsyncThunk(
  'ClientDetails/deleteClientDetails',
  async (id: number) => {
    await ClientDetailsAPI.delete(id);
    return id;
  }
);

const ClientDetailsSlice = createSlice({
  name: 'ClientDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientDetailssAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClientDetailssAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(createClientDetailsAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateClientDetailsAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteClientDetailsAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default ClientDetailsSlice.reducer;