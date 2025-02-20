import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import baseURL from "../../../../Common/Constant/common"

// Define the base URL of the API
const baseURL = 'https://api.jafchain.com';


// Define the async thunk for /getAllNews endpoint
export const getAllNews = createAsyncThunk(
    'news/getAll',
    async (payload, thunkAPI) => {
        try {
            const response = await axios.get(`${baseURL}/getAllNews`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Define the async thunk for /getNewsById endpoint
export const getNewsById = createAsyncThunk(
    'news/getById',
    async (id, thunkAPI) => {
        try {
            const response = await axios.post(`${baseURL}/getNewsById/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Define the news slice
const newsSlice = createSlice({
    name: 'news',
    initialState: {
        allNews: [],
        selectedNews: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Case for getAllNews
            .addCase(getAllNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllNews.fulfilled, (state, action) => {
                state.loading = false;
                state.allNews = action.payload;
            })
            .addCase(getAllNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Case for getNewsById
            .addCase(getNewsById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getNewsById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedNews = action.payload;
            })
            .addCase(getNewsById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default newsSlice.reducer;
