import { combineReducers, configureStore } from "@reduxjs/toolkit"

import storage  from "redux-persist/lib/storage"
import loginSlice from "./slices/loginSlice"
import favouriteSlice from "./slices/movieSlice"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
    key: "Root",
    storage: storage
}

const reducer = combineReducers({
    loginABC:loginSlice,
    FavMovie:favouriteSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

 export const store = configureStore({
    reducer: {
        addLogin: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)