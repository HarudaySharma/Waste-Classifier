import { useEffect, useRef, useState } from "react"
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

type useFetchImageDetailsType = [
    React.Dispatch<React.SetStateAction<string | undefined>>,
    React.MutableRefObject<AbortController | undefined>
];

const useFetchImageDetails = (initialUrl?: string): useFetchImageDetailsType => {
    // for aborting the requests no longer required
    const abortController = useRef<AbortController>();
    //
    const dispatch = useAppDispatch();
    const [imageUrl, setImageUrl] = useState(initialUrl);

    useEffect(() => {
        async function fetchDetails() {
            if (!imageUrl)
                return;
            try {
                if (abortController.current)
                    abortController.current.abort();

                dispatch(imageProcessingStart());
                abortController.current = new AbortController();
                const signal = abortController.current.signal;

                const res = await fetch('https://waste-classifier-server.vercel.app/api', {
                    method: 'POST',
                    signal,
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
                if (err.name === 'AbortError') {
                    console.log('request aborted')
                    return;
                }
                dispatch(setImageUploadError({ error: err }));
                dispatch(imageProcessingStop());
            }
        }
        fetchDetails();
    }, [imageUrl, dispatch])

    return [setImageUrl, abortController];
}
export default useFetchImageDetails;
