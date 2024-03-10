import { getStorage, ref, uploadBytesResumable, getDownloadURL, StorageError, UploadTask } from "firebase/storage";
import app from "../providers/firebase.js";
import React from "react";

interface handleImageUploadProps {
    image: File;
    setImageUploadError?: React.Dispatch<React.SetStateAction<StorageError | undefined>>;
    setImageUploadPercent?: React.Dispatch<React.SetStateAction<number>>;
    uploadTaskRef: React.MutableRefObject<UploadTask | undefined>;
}

/*
    * @params
    * image : File
    * @return
    * URL of image saved on the cloud
*/
const uploadToFirebase = async ({
    image,
    uploadTaskRef,
}: handleImageUploadProps):
    Promise<string | undefined> => {

    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTaskRef.current = uploadTask;

    let url = undefined;
    await new Promise((resolve, reject) => {
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                //setImageUploadPercent(+progress.toFixed(0));
            },
            (error) => {
                reject(error as StorageError);
                return;
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        url = downloadURL;
                        resolve(url);
                        return;
                    })
                    .catch((error) => {
                        reject(error as StorageError);
                        return;
                    });
            }
        );
    })
    return url;
}

export default uploadToFirebase;

