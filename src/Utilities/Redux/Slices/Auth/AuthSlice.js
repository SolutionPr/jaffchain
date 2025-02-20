import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const loginAsync = createAsyncThunk('auth/login', async (address) => {
    console.log(address, "address12");
    try {
        const response = await axios.post('https://api.jafchain.com/login', { address });
        // console.log(response.data.body.user_id, "user_id");

        return response.data;
    } catch (error) {
        throw Error(error.response.data.message);
    }
});

// Create slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Additional reducers can be defined here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export actions and reducer
export const { } = authSlice.actions; // If you have additional reducers, add them here
export default authSlice.reducer;
