import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    loading: false,
    error: null,
    success: false,
    Jafbalance: []
};

// Define the asynchronous thunk action creator
export const fetchBalance = createAsyncThunk(
    'balance/fetch',
    async (address, { rejectWithValue }) => {
        console.log(address, ":::::address");
        try {
            const response = await axios.get(`https://api.jafchain.com/getBalance/${address}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBalance.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(fetchBalance.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.Jafbalance = action.payload;
                console.log(action.payload, "Jafbalance");
            })
            .addCase(fetchBalance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch balance';
                state.success = false;
            });
    },
});

export default balanceSlice.reducer;
