import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/jobs/jobSclice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: goalReducer,
  },
})