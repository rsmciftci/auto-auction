import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import loginDrawerSlice from "./loginDrawerSlice"
import createAccountDrawerSlice from "./createAccountDrawerSlice"
import userSlice from "./userSlice"
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
    createAccountDrawerSlice : createAccountDrawerSlice,
    userSlice : userSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),

    reducer: {
        persistedData : persistedReducer
    },
})

export const persistor = persistStore(store)