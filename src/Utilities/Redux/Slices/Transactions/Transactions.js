import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    loading: false,
    error: null,
    success: false,
    tokenValue: null
};

// Define the asynchronous thunk action creator
export const buyToken = createAsyncThunk(
    'token/buy',
    async (requestData, { rejectWithValue }) => {
        console.log(requestData, "requestData");
        try {
            const response = await axios.post('https://api.jafchain.com/buyToken', requestData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(buyToken.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(buyToken.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.tokenValue = action.payload.token;

            })
            .addCase(buyToken.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            });
    },
});

export default tokenSlice.reducer;
