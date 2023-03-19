import { configureStore } from '@reduxjs/toolkit';
import sliceOpenMenu from '~/Layouts/DefaulLayOut/Header/sliceOpenMenu';
export const store = configureStore({
  reducer: {
    openMenuSideBar: sliceOpenMenu,
  },
});
