import React, { useEffect, useState } from "react";
import uploadToFirebase from "../utils/uploadToFirebase.ts";
import { imageProcessingStart, imageProcessingStop, setImageUploadError, setImageUrl } from "../redux/slices/imageSlice";
import { useAppDispatch, useAppSelector } from ".";


/*
    * @params 
    * image: File
    * @return
    * url of the image(as a state)
    * ImageSetter: to upload a new Image
*/
const useUploadImage = (imageFile?: File): [string | undefined, React.Dispatch<React.SetStateAction<File | null | undefined>>]  => {
    const dispatch = useAppDispatch();
    const { imageUrl } = useAppSelector(state => state.image);
    const [image, setImage] = useState<File | null | undefined>(imageFile);

    useEffect(() => {
        async function uploadImg(image: File | null | undefined) {
            if (!image){
                dispatch(setImageUrl({imageUrl: undefined}));
                return;
            }
            try {
                dispatch(imageProcessingStart());
                const url = await uploadToFirebase({image});
                if(!url) {
                    dispatch(setImageUploadError({error: "error uploading to firebase"}));
                    dispatch(imageProcessingStop());
                    return;
                }
                dispatch(setImageUrl({imageUrl: url}));
                dispatch(imageProcessingStop());
            }
            catch (error) {
                dispatch(setImageUploadError({error}));
                dispatch(imageProcessingStop());
            }
        }
        uploadImg(image);

    }, [image, dispatch]);

    return [ imageUrl, setImage ];
}

export default useUploadImage;
