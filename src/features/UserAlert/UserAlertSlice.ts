import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserAlertAPI } from './UserAlertAPI';

export interface UserAlert {
  id: number;
  name: string;
  description: string;
}

interface UserAlertState {
  items: UserAlert[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserAlertState = {
  items: [],
  status: 'idle',
};

export const fetchUserAlertsAsync = createAsyncThunk(
  'UserAlert/fetchUserAlerts',
  async () => {
    const response = await UserAlertAPI.fetchAll();
    return response.data;
  }
);

export const createUserAlertAsync = createAsyncThunk(
  'UserAlert/createUserAlert',
  async (newItem: UserAlert) => {
    const response = await UserAlertAPI.create(newItem);
    return response.data;
  }
);

export const updateUserAlertAsync = createAsyncThunk(
  'UserAlert/updateUserAlert',
  async (updatedItem: UserAlert) => {
    const response = await UserAlertAPI.update(updatedItem.id, updatedItem);
    return response.data;
  }
);

export const deleteUserAlertAsync = createAsyncThunk(
  'UserAlert/deleteUserAlert',
  async (id: number) => {
    await UserAlertAPI.delete(id);
    return id;
  }
);

const UserAlertSlice = createSlice({
  name: 'UserAlert',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAlertsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserAlertsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(createUserAlertAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateUserAlertAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteUserAlertAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default UserAlertSlice.reducer;