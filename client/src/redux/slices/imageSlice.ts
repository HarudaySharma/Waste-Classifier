import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImageResponseObj } from "../../types";
import { stat } from "fs";

export type ImageSliceInitial = {
    imageUrl?: string,
    wasteType?: string,
    info?: string,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    error?: any,
    /* eslint-enable @typescript-eslint/no-explicit-any */
    percentage?: number,
    loading?: boolean
}

const imageSliceInitial: ImageSliceInitial = {
};

const imageSlice = createSlice({
    name: "image",
    initialState: imageSliceInitial,
    reducers: {
        imageProcessingStart: (state) => {
            state.loading = true;
        },
        imageProcessingStop: (state) => {
            state.loading = false;
        },
        populateImage: (state, action: PayloadAction<ImageResponseObj>) => {
            const { imageUrl, wasteType, info } = action.payload;
            state.imageUrl = imageUrl;
            state.wasteType = wasteType;
            state.info = info;
        },
        setImageUrl: (state, action: PayloadAction<{ imageUrl: string }>) => {
            state.imageUrl = action.payload.imageUrl;
        },
        setImageType: (state, action: PayloadAction<{ wasteType: string }>) => {
            state.wasteType = action.payload.wasteType;
        },
        setImageInfo: (state, action: PayloadAction<{ info: string }>) => {
            state.info = action.payload.info;
        },
        setImageUploadPercentage: (state, action: PayloadAction<{ percentage: number }>) => {
            state.percentage = action.payload.percentage;
        },
        /* eslint-disable @typescript-eslint/no-explicit-any */
        setImageUploadError: (state, action: PayloadAction<{ error: any }>) => {
            state.error = action.payload.error;
        },
        /* eslint-enable @typescript-eslint/no-explicit-any */
    },
})

export default imageSlice.reducer;

export const {
    populateImage,
    setImageUrl,
    setImageInfo,
    setImageType,
    setImageUploadPercentage,
    setImageUploadError,
    imageProcessingStart,
    imageProcessingStop,
} = imageSlice.actions;
