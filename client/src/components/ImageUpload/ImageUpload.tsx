import { useEffect } from "react";
import DropContainer from "../ui/DropContainer/DropContainer";
import styles from "./ImageUpload.module.scss"
import useUploadImage from "../../hooks/useUploadImage";
import useFetchImageDetails from "../../hooks/useFetchImageDetails";
import { resetImageState } from "../../redux/slices/imageSlice";
import { useAppDispatch } from "../../hooks";
import scanIcon from '../../assets/vector.png'
import Button from "../ui/Button/Button";
import { useSearchParams } from "react-router-dom";

const ImageUpload = () => {
    const dispatch = useAppDispatch();
    const [, setURLSearchParams] = useSearchParams();
    const [url, setImage, uploadTaskRef] = useUploadImage();
    const [setImageUrl, abortController] = useFetchImageDetails(url);

    useEffect(() => {
        return () => {
            // abort the request if user changes the page
            if (uploadTaskRef.current) uploadTaskRef.current.cancel();
            if (abortController.current) abortController.current.abort();
            dispatch(resetImageState());
        }
    }, []);

    useEffect(() => {
        if (url)
            setImageUrl(url);
    }, [url, setImageUrl]);


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
            <Button className='change-btn' onClickHandler={() => setURLSearchParams({ type: 'scan' })}>
                <img
                    src={scanIcon}
                    alt="scanIcon"
                    className='home__main__column1__buttons__scan__icon'
                />
                Scan
            </Button>
        </div>
    )
}

export default ImageUpload;

