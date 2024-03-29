import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import subscriptionService from './subscriptionServices'


const initialState = {
  subscribers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  number: '',
}
export const getSubscribers = createAsyncThunk(
  'subscribers/getAll',
  async (userdata, thunkAPI) => {
    try {
      
      return await subscriptionService.getSubscribers(userdata)
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
export const deleteSubscriber = createAsyncThunk(
  'subscribers/delete',
  async (goalId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await subscriptionService.deleteSubscriber(goalId, token)
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

export const getAllSubscribers = createAsyncThunk(
  'subscribers/getAll',
  async (_, thunkAPI) => {
    try {
      
      return await subscriptionService.getAllSubscribers()
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
export const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState,
  reducers: {
    reset: (state) => initialState,
  }, extraReducers: (builder) => {
      builder
     
        .addCase(getSubscribers.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getSubscribers.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.goals = action.payload
        })
        .addCase(getSubscribers.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        }) 
        
        // add case for delete subscriber
        .addCase(deleteSubscriber.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteSubscriber.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.subscribers = state.subscribers.filter((subscriber) => subscriber._id !== action.payload)
        })
        .addCase(deleteSubscriber.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        

    

    },
  })

export const { reset } = subscriberSlice.actions
export default subscriberSlice.reducer