import { createSlice } from '@reduxjs/toolkit';

const openMenuSideBar = createSlice({
  name: 'openMenu',
  initialState: { status: false },
  reducers: {
    openMenu(state, action) {
      state.status = action.payload;
    },
  },
});
export const { openMenu } = openMenuSideBar.actions;
export default openMenuSideBar.reducer;
