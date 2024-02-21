import { useEffect, useState } from "react";
import DropContainer from "../ui/DropContainer/DropContainer";
import styles from "./ImageUpload.module.scss"
import useUploadImage from "../../hooks/useUploadImage";
import useFetchImageDetails from "../../hooks/useFetchImageDetails";


const ImageUpload = () => {

    //const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    //const [imageUploadPercent, setImageUploadPercent] = useState(0);
    //const [imageUploadError, setImageUploadError] = useState<StorageError | undefined>(undefined);

    const [url, setImage] = useUploadImage();
    const [setImageUrl] = useFetchImageDetails(url);

    useEffect(() => {
        setImageUrl(url);
    }, [url, setImageUrl]);


    return (
        <div className={styles.container}>
            {loading && <p>loading ....</p>}
            <DropContainer
                heading="Select a file"
                subheading={`Drag and Drop Files here`}
                active
                onImageUpload={(e) => setImage(e.target.files[0])}
                onImageDrop={(e) => setImage(e.dataTransfer.files[0])}
            />
            {/*imagePreview &&
                <img src={imagePreview} />*/}

        </div>
    )
}

export default ImageUpload;

