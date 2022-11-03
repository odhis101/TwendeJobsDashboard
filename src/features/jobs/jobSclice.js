import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import jobService from './jobServices'

const initialState = {
    jobs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
  // Create new Job
  export const createGoal = createAsyncThunk(
    'jobs/create',
    async (jobData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await jobService.createGoal(jobData, token)
    }
    catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
    )
// Get user Jobs
export const getGoals = createAsyncThunk(
    'jobs/getAll',
    async (_, thunkAPI) => {
      try {
       
        console.log('lol you are smart  ')
        return await jobService.getGoals()
      } catch (error) {
        console.log('lol you are crazy ')
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  export const deleteGoal = createAsyncThunk(
    'jobs/delete',
    async (id, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await jobService.deleteGoal(id, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  export const goalSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
      reset: (state) => initialState,
    }, extraReducers: (builder) => {
        builder
          .addCase(createGoal.pending, (state) => {
            state.isLoading = true
          })
          .addCase(createGoal.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals.push(action.payload)
          })
          .addCase(createGoal.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(getGoals.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getGoals.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals = action.payload
          })
          .addCase(getGoals.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(deleteGoal.pending, (state) => {
            state.isLoading = true
          })
          .addCase(deleteGoal.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals = state.goals.filter(
              (goal) => goal._id !== action.payload.id
            )
          })
          .addCase(deleteGoal.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
      },
    })
export const { reset } = goalSlice.actions
export default goalSlice.reducer