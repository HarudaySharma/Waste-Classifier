import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImageResponseObj1, HighestRank, ImageResponseObj2 } from "../../types";

export interface ImageSliceInitial extends ImageResponseObj1, ImageResponseObj2 {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    error?: any;
    /* eslint-enable @typescript-eslint/no-explicit-any */
    percentage?: number;
    loading?: boolean;
    dataSource?: "OWN_MODEL" | "GEMINI";
}

const imageSliceInitial: ImageSliceInitial = {
    imageUrl: '',
    information: '',
    classes: [],
    highestRank: {
        class: '',
        score: 0,
        about: '',
    },
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
        populateImageViaOwnClassification: (state, action: PayloadAction<ImageResponseObj1>) => {
            state.imageUrl = action.payload.imageUrl;
            state.classes = action.payload.classes;
            state.highestRank = action.payload.highestRank;
            state.dataSource = "OWN_MODEL";
        },
        populateImageViaGemini: (state, action: PayloadAction<ImageResponseObj2>) => {
            state.imageUrl = action.payload.imageUrl;
            state.information = action.payload.information;
            state.dataSource = "GEMINI";
        },
        setImageUrl: (state, action: PayloadAction<{ imageUrl: string | undefined }>) => {
            if (action.payload.imageUrl)
                state.imageUrl = action.payload.imageUrl;
        },
        setHighestRank: (state, action: PayloadAction<HighestRank | undefined>) => {
            if (action.payload)
                state.highestRank = action.payload;
        },
        /* sctImageInfo: (state, action: PayloadAction<{ info: string }>) => {
            state.info = action.payload.info;
        }, */
        setImageUploadPercentage: (state, action: PayloadAction<{ percentage: number }>) => {
            state.percentage = action.payload.percentage;
        },
        /* eslint-disable @typescript-eslint/no-explicit-any */
        setImageUploadError: (state, action: PayloadAction<{ error: any }>) => {
            state.error = action.payload.error;
        },
        /* eslint-enable @typescript-eslint/no-explicit-any */
        resetImageStatePartial: (state, action: PayloadAction<{ dataPart: boolean, imageUrl: boolean, dataSource: boolean }>) => {
            const { dataPart, imageUrl, dataSource } = action.payload;
            if (dataPart) {
                state.information = '';
                state.classes = [];
                state.highestRank = {
                    class: '',
                    score: 0,
                    about: '',
                };
            }
            if (imageUrl) {
                state.imageUrl = '';
            }
            if (dataSource) {
                state.dataSource = undefined;
            }
        },
        resetImageState: (state) => {
            state.imageUrl = '';
            state.dataSource = undefined;
            state.information = '';
            state.classes = [];
            state.highestRank = {
                class: '',
                score: 0,
                about: '',
            };
            state.percentage = undefined;
            state.error = undefined;
            state.loading = undefined;
        }
    },
})

export default imageSlice.reducer;

export const {
    populateImageViaOwnClassification,
    populateImageViaGemini,
    setImageUrl,
    setImageUploadPercentage,
    setImageUploadError,
    imageProcessingStart,
    imageProcessingStop,
    resetImageStatePartial,
    resetImageState,
} = imageSlice.actions;
