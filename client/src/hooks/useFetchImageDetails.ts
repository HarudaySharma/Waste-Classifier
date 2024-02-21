import { useEffect, useState } from "react"
import { useAppDispatch } from ".";
import { imageProcessingStart, imageProcessingStop, populateImage, setImageUploadError } from "../redux/slices/imageSlice";
import { ImageResponseObj } from "../types";

/*
    *@params
    *initialUrl: url of the image 
    *@return
    * imageUrl setter
    *
    * 
*/
const useFetchImageDetails = (initialUrl?: string): [React.Dispatch<React.SetStateAction<string | undefined>>] => {
    const dispatch = useAppDispatch();
    const [imageUrl, setImageUrl] = useState(initialUrl);

    useEffect(() => {
        async function fetchDetails() {
            if (!imageUrl)
                return;
            try {
                dispatch(imageProcessingStart());
                const res = await fetch('/api/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ imageUrl }),
                });
                if (!res.ok) {
                    console.log(res);
                    dispatch(setImageUploadError({ error: "check the url" }));
                    dispatch(imageProcessingStop());
                    return;
                }
                const data = await res.json() as ImageResponseObj;
                dispatch(populateImage(data));
                dispatch(imageProcessingStop());
            }
            catch (err) {
                dispatch(setImageUploadError({ error: err }));
                dispatch(imageProcessingStop());
                console.log(err);
            }
        }
        fetchDetails();
    }, [imageUrl, dispatch])

    return [setImageUrl];
}
export default useFetchImageDetails;
