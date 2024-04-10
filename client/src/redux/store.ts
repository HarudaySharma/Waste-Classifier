import { configureStore } from "@reduxjs/toolkit";

import imageReducer from "./slices/imageSlice"

export const store = configureStore({
    reducer: {
        image: imageReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            { serializableCheck: false }
        )
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
