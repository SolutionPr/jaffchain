import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../../../Common/Constant/common';

const initialState = {
    tutorials: [],
    status: 'idle', // or 'loading', 'succeeded', 'failed'
    error: null,
};

export const fetchTutorials = createAsyncThunk('tutorials/fetchTutorials', async () => {
    try {
        const response = await axios.get(`${baseURL}/getAllTutorials`);
        return response.data;
    } catch (error) {
        throw error;
    }
});

const tutorialsSlice = createSlice({
    name: 'tutorials',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTutorials.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTutorials.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tutorials = action.payload;
            })
            .addCase(fetchTutorials.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export actions and reducer
export default tutorialsSlice.reducer;
