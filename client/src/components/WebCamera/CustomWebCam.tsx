import React, { useEffect, useRef, useState } from 'react'
import styles from "./CustomWebCam.module.scss"
import Webcam from 'react-webcam'
import Button from '../ui/Button/Button';
import useUploadImage from '../../hooks/useUploadImage';
import { dataURLtoFile } from '../../utils/dataURLtoFile';
import useFetchImageDetails from '../../hooks/useFetchImageDetails';

const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user"
};

export const CustomWebCam = () => {
    const cameraRef = useRef(null);
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [url, setImage] = useUploadImage();
    const [setImageUrl] = useFetchImageDetails(url);

    useEffect(() => {
        setImage(imgFile);
    }, [imgFile, setImage]);


    useEffect(() => {
        setImageUrl(url);
    }, [url, setImageUrl]);


    const capture = React.useCallback(() => {
        const image = cameraRef?.current?.getScreenshot({ width: 420, height: 420 });
        if (image) {
            const file = dataURLtoFile(image, 'captured-image.jpg');
            console.log(file);
            setImgFile(file);
        }
    }, [cameraRef]);


    const reCapture = () => {
        setImgFile(null);
    }
    return (
        <div className={styles.container}>
            {url ?
                <img src={url} />
                :
                <Webcam
                    audio={false}
                    videoConstraints={videoConstraints}
                    ref={cameraRef}
                    screenshotFormat='image/jpeg'
                    height={420}
                    width={420}
                />
            }
            <Button onClickHandler={imgFile ? reCapture : capture}>
                {imgFile ? "RECAPTURE" : "CAPTURE"}
            </Button>
        </div>
    )
}
