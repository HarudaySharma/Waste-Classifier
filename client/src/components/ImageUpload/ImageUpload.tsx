import { useEffect } from "react";
import DropContainer from "../ui/DropContainer/DropContainer";
import styles from "./ImageUpload.module.scss"
import useUploadImage from "../../hooks/useUploadImage";
import useFetchImageDetails from "../../hooks/useFetchImageDetails";
import { resetImageState } from "../../redux/slices/imageSlice";
import { useAppDispatch } from "../../hooks";

const ImageUpload = () => {
    //const [imageUploadPercent, setImageUploadPercent] = useState(0);
    //const [imageUploadError, setImageUploadError] = useState<StorageError | undefined>(undefined);
    const dispatch = useAppDispatch();
    const [url, setImage] = useUploadImage();
    const [setImageUrl] = useFetchImageDetails(url);

    useEffect(() => {
        console.log("resetting image state");
        dispatch(resetImageState());
        return () => {
            dispatch(resetImageState());
        }
    }, [dispatch]);

    useEffect(() => {
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
            {/*imagePreview &&
                <img src={imagePreview} />*/}
        </div>
    )
}

export default ImageUpload;

