import { useEffect, useRef, useState } from "react"
import { useAppDispatch } from ".";
import {
    imageProcessingStart,
    imageProcessingStop,
    populateImageViaOwnClassification,
    populateImageViaGemini,
    setImageUploadError,
    resetImageStatePartial
} from "../redux/slices/imageSlice";
import { ImageResponseObj1, ImageResponseObj2 } from "../types";

/*
    *@params
    *initialUrl: url of the image 
    *@return
    * imageUrl setter
    *
    * 
*/
type FetchImageOptions = "OWN_MODEL" | "GEMINI";

type useFetchImageDetailsType = [
    React.Dispatch<React.SetStateAction<string | undefined>>,
    React.Dispatch<React.SetStateAction<FetchImageOptions>>,
    React.MutableRefObject<AbortController | undefined>
];

const useFetchImageDetails = (initialUrl?: string): useFetchImageDetailsType => {
    const dispatch = useAppDispatch();
    // for aborting the requests no longer required
    const abortController = useRef<AbortController>();

    const [imageUrl, setImageUrl] = useState(initialUrl);
    const [requestOption, setRequestOption] = useState<FetchImageOptions>("GEMINI");

    const fetchData = async () => {
        dispatch(imageProcessingStart());
        try {
            const endPoint = requestOption === 'OWN_MODEL' ? '/' : '/useGemini';
            console.log(requestOption);
            const res = await fetch(`https://waste-classifier-server.vercel.app/api${endPoint}`, {
                method: 'POST',
                signal: abortController.current?.signal,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageUrl }),
            });
            if (!res.ok) {
                dispatch(setImageUploadError({ error: "check the url" }));
                console.log(res);
                dispatch(imageProcessingStop());
                return;
            }
            const data = await res.json();
            if (requestOption === 'OWN_MODEL') {
                dispatch(populateImageViaOwnClassification(data as ImageResponseObj1));
            }
            if (requestOption === 'GEMINI') {
                dispatch(populateImageViaGemini(data as ImageResponseObj2));
            }
        }
        catch (err) {
            if (err.name === 'AbortError') {
                console.log('request aborted')
                return;
            }
            dispatch(setImageUploadError({ error: err }));
        }
        dispatch(imageProcessingStop());
    }

    useEffect(() => {
        if (!imageUrl || !requestOption)
            return;
        abortController.current = new AbortController();
        fetchData();
        return () => {
            dispatch(resetImageStatePartial({
                dataPart: true,
                dataSource: false,
                imageUrl: false
            }));
            abortController.current?.abort();
        }
    }, [imageUrl, requestOption])

    return [setImageUrl, setRequestOption, abortController];
}
export default useFetchImageDetails;
