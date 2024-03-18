import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import configSlice from "./configSlice"
import loginDrawerSlice from "./loginDrawerSlice"
import createAccountDrawerSlice from "./createAccountDrawerSlice"
const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    // candidateData: candidateSlice,
    // jobSearchSlice: jobSearchSlice,
    // recruiterSlice: recruiterSlice,
    // jobsSlice: jobsSlice,
    // candidateSearchSlice: candidateSearchSlice,
    loginDrawerSlice : loginDrawerSlice,
    createAccountDrawerSlice : createAccountDrawerSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),

    reducer: {
        persistedData : persistedReducer,
        configSlice : configSlice
    },
})

export const persistor = persistStore(store)