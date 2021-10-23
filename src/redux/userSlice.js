import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "anna",
    email: "anna@gmail.com",
  },
  pending: false,
  error: false,
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    remove: (state) => (state = {}),
    addHello: (state, action) => {
      state.name = 'Hello ' + action.payload.name
      state.email = action.payload.email
    }
  }
});

export const { update, remove, addHello } = userSlice.actions
export default userSlice.reducer;