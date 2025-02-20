import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from "./Slices/Auth/AuthSlice"
import tokenReducer from "./Slices/Transactions/Transactions"
import GetTransactions from './Slices/Transactions/GetTransactions';
import newsReducer from './Slices/News/NewsSlice';
import tutorialReducer from './Slices/Tutorial/TotorialdSlice';
import downlodReducer from './Slices/Download/DownloadSlice';
import balanceReducer from "./Slices/GetBalance/GetBalance"




const rootReducer = combineReducers({
    auth: authReducer,
    transactions: GetTransactions,
    token: tokenReducer,
    news: newsReducer,
    tutorial: tutorialReducer,
    downloaded: downlodReducer,
    balancedata: balanceReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
