// transactionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    transactions: [],
    loading: false,
    error: null,
};


export const fetchTransactionsByAddress = createAsyncThunk(
    'transactions/fetchByAddress',
    async (payload, thunkAPI) => {
        const { address, days, month, type } = payload;
        console.log(payload, "233435");
        // const wallet_Add = localStorage.getItem("address");
        let url = 'https://api.jafchain.com/getTransactionByAddress?';

        if (!address) {
            throw new Error('Address is required for the API call');
        }

        url += `address=${address}`;

        if (days) url += `&days=${days}`;

        if (month) {
            const monthMapping = {
                jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
                jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
            };
            const monthName = month.split(' ')[0].toLowerCase();
            const monthNumber = monthMapping[monthName];
            if (monthNumber) {
                url += `&month=${monthNumber}`;
            } else {
                throw new Error('Invalid month name provided');
            }
        }

        if (type) {
            const lowercaseType = type.toLowerCase();
            url += `&type=${lowercaseType}`;
        }

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



const GetTransactions = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactionsByAddress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTransactionsByAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactionsByAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const transactionsActions = GetTransactions.actions;
export default GetTransactions.reducer;
