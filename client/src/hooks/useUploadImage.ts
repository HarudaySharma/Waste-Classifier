import React, { useEffect, useRef, useState } from "react";
import uploadToFirebase from "../utils/uploadToFirebase.ts";
import { imageProcessingStart, imageProcessingStop, setImageUploadError, setImageUrl } from "../redux/slices/imageSlice";
import { useAppDispatch, useAppSelector } from ".";
import { UploadTask } from "firebase/storage";


/*
    * @params 
    * image: File
    * @return
    * url of the image(as a state)
    * ImageSetter: to upload a new Image
*/
type uploadImgReturnType = [
    string | undefined,
    React.Dispatch<React.SetStateAction<File | null | undefined>>,
    React.MutableRefObject<UploadTask | undefined>,
];

const useUploadImage = (imageFile?: File): uploadImgReturnType => {
    const dispatch = useAppDispatch();
    const { imageUrl } = useAppSelector(state => state.image);
    const [image, setImage] = useState<File | null | undefined>(imageFile);
    const uploadTaskRef = useRef<UploadTask>();

    useEffect(() => {
        async function uploadImg(image: File | null | undefined) {
            if (!image) {
                dispatch(setImageUrl({ imageUrl: undefined }));
                return;
            }
            try {
                if(uploadTaskRef.current)
                    uploadTaskRef.current.cancel();

                dispatch(imageProcessingStart());
                const url = await uploadToFirebase({ image, uploadTaskRef });
                if (!url) {
                    dispatch(setImageUploadError({ error: "error uploading to firebase" }));
                    dispatch(imageProcessingStop());
                    return;
                }
                dispatch(setImageUrl({ imageUrl: url }));
                dispatch(imageProcessingStop());
            }
            catch (error) {
                if(error.name === 'FirebaseError')
                    return;
                dispatch(setImageUploadError({ error }));
                dispatch(imageProcessingStop());
            }
        }
        uploadImg(image);

    }, [image, dispatch]);

    return [imageUrl, setImage, uploadTaskRef];
}

export default useUploadImage;
