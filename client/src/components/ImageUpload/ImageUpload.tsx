import { useEffect } from "react";

import useUploadImage from "../../hooks/useUploadImage";
import useFetchImageDetails from "../../hooks/useFetchImageDetails";

import { resetImageState } from "../../redux/slices/imageSlice";
import { useAppDispatch } from "../../hooks";

import DropContainer from "../ui/DropContainer/DropContainer";
import ChangeButton from "../ChangeButton";
import { DataEndpointSwitch } from "../DataEndpointSwitch";

const ImageUpload = () => {
    const dispatch = useAppDispatch();
    const [url, setImage, uploadTaskRef] = useUploadImage();
    const [setImageUrl, setRequestOption, abortController] = useFetchImageDetails(url);

    useEffect(() => {
        return () => {
            // abort the request if user changes the page
            if (uploadTaskRef.current) uploadTaskRef.current.cancel();
            if (abortController.current) {
                abortController.current.abort();
                dispatch(resetImageState());
            }
        }
    }, []);

    useEffect(() => {
        if (url) {
            setImageUrl(url);
        }
    }, [url, setImageUrl]);

    const endpointSwitchHandler = (checked: boolean) => {
        if(checked) {
            setRequestOption('OWN_MODEL');
        }
        else {
            setRequestOption('GEMINI');
        }
    }

    return (
        <div className="image-upload">
            <DropContainer
                heading="Select a file"
                subheading={`Drag and Drop Files here`}
                active
                onImageUpload={(e) => {
                    dispatch(resetImageState());
                    setImage(e.target.files[0])
                }}
                onImageDrop={(e) => {
                    dispatch(resetImageState());
                    setImage(e.dataTransfer.files[0])
                }}
            />
            <ChangeButton switchTo="scan" />
            <DataEndpointSwitch endpointSwitchHandler={endpointSwitchHandler}/>
        </div>
    )
}

export default ImageUpload;

