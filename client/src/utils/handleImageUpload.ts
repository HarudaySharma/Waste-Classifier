import { getStorage, ref, uploadBytesResumable, getDownloadURL, StorageError } from "firebase/storage";
import app from "../providers/firebase.js";
import React from "react";

interface handleImageUploadProps {
    image: File;
    setImageURL: React.Dispatch<React.SetStateAction<string | undefined>>;
    setImageUploadError?: React.Dispatch<React.SetStateAction<StorageError | undefined>>;
    setImageUploadPercent?: React.Dispatch<React.SetStateAction<number>>;
}

const handleImageUpload = async ({
    image,
    setImageURL,
    setImageUploadError,
    setImageUploadPercent,
}: handleImageUploadProps):
    Promise<void> => {

    console.log(image);

    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;

    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            //setImageUploadPercent(+progress.toFixed(0));
        },
        (error) => {
            //setImageUploadError(error);
            console.log(error);
            return;
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImageURL(downloadURL);
            });
        }
    );
    return;
}

export default handleImageUpload;

