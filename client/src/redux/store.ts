import { configureStore } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import imageReducer from "./slices/imageSlice"
import userReducer from "./slices/userSlice"

const persistUserConfig = {
    key: 'user',
    version: 1,
    storage,
}

const persistUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistUserReducer,
        image: imageReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            { serializableCheck: false }
        )
});

export const persistor = persistStore(store);
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
