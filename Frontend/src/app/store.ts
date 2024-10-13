
import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../feauters/authSlice';
import jobReducer from '../feauters/JobsSlice';

export const store =  configureStore({
  reducer: {
    auth : authReducer,
    jobs : jobReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch