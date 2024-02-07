import React, { ChangeEvent, ChangeEventHandler, FC, FormEventHandler, SyntheticEvent, useEffect, useState } from "react";
import DropContainer from "../ui/DropContainer/DropContainer";
import handleImageUpload from "../../utils/handleImageUpload";
import { StorageError } from "firebase/storage";
import "./ImageUpload.module.scss"
import fetchImageInfo from "../../utils/fetchImageInfo";
import { ResponseObj } from "../../types";

interface ImageUploadProps {
    liftState: (state: ResponseObj) => void;
}

/*
 * send firebase the Image
 * handleImageUpload will return ImageUrl
 */
const ImageUpload: FC<ImageUploadProps> = ({ liftState }) => {
    const [image, setImage] = useState<File | undefined | null>(undefined);
    //const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
    const [imageURL, setImageURL] = useState<string | undefined>(undefined);
    const [imageObj, setImageObj] = useState<ResponseObj | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    //const [imageUploadPercent, setImageUploadPercent] = useState(0);
    //const [imageUploadError, setImageUploadError] = useState<StorageError | undefined>(undefined);


    useEffect(() => {
        if (!imageObj) return;

        setImageURL(undefined);
        setImageObj(undefined);

        console.log(imageObj);

        liftState(imageObj);

    }, [imageObj, setImageObj, liftState])

    useEffect(() => {
        if (!imageURL) return;

        console.log(imageURL);
        const getImgObj = async () => {
            console.log("here");
            try {
                await fetchImageInfo({ imageURL, setImageObj });
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }

        getImgObj();
    }, [imageURL, setImageURL])

    useEffect(() => {

        const uploadImg = async () => {
            if (!image) return;

           // const reader = new FileReader();
           // reader.onload = () => {
           //     setImagePreview(reader.result);
           // }
           // reader.readAsDataURL(image);

            try {
                setLoading(true);
                await handleImageUpload({ image, setImageURL });
            }
            catch (err) {
                console.log(err);
            }
        }
        uploadImg();

    }, [image, setImage]);

    return (
        <div className="container">
           {loading && <p>loading ....</p>}
            <DropContainer
                heading="Drop your Image"
                subheading="open file explorer"
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

