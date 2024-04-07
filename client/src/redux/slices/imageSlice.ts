import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImageResponseObj, HighestRank } from "../../types";

export interface ImageSliceInitial extends ImageResponseObj {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    error?: any;
    /* eslint-enable @typescript-eslint/no-explicit-any */
    percentage?: number;
    loading?: boolean;
}

const imageSliceInitial: ImageSliceInitial = {
    imageUrl: '',
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
        populateImage: (state, action: PayloadAction<ImageResponseObj>) => {
            state.imageUrl = action.payload.imageUrl;
            state.classes = action.payload.classes;
            state.highestRank = action.payload.highestRank;
            // const { imageUrl, classes,  } = action.payload;
            // if (state.imageUrl == undefined)
            //     state.imageUrl = imageUrl;
            // state.wasteType = wasteType;
            // state.info = info;
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
        resetImageState: (state) => {
            state.imageUrl = '';
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
    populateImage,
    setImageUrl,
    /* setImageInfo,
    setImageType, */
    setImageUploadPercentage,
    setImageUploadError,
    imageProcessingStart,
    imageProcessingStop,
    resetImageState,
} = imageSlice.actions;
