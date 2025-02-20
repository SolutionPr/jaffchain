import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../../../Common/Constant/common';

const initialState = {
    downloadData: [],
    status: 'idle', // or 'loading', 'succeeded', 'failed'
    error: null,
};

export const fetchDownloads = createAsyncThunk('downloadData/fetchDownloads', async () => {
    try {
        const response = await axios.get(`${baseURL}/allFileList`);
        return response.data;
    } catch (error) {
        throw error;
    }
});


const DownloadSlice = createSlice({
    name: 'tutorials',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDownloads.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDownloads.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.downloadData = action.payload;
            })
            .addCase(fetchDownloads.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export actions and reducer
export default DownloadSlice.reducer;