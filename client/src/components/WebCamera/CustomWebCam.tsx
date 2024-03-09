import React, { useEffect, useRef, useState } from 'react'
import styles from "./CustomWebCam.module.scss"
import Webcam from 'react-webcam'
import Button from '../ui/Button/Button';
import useUploadImage from '../../hooks/useUploadImage';
import { dataURLtoFile } from '../../utils/dataURLtoFile';
import useFetchImageDetails from '../../hooks/useFetchImageDetails';
import { useAppDispatch } from '../../hooks';
import { resetImageState } from '../../redux/slices/imageSlice';

const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user"
};

export const CustomWebCam = () => {
    const dispatch = useAppDispatch();
    const cameraRef = useRef(null);
    const [tmpImg, setTmpImg] = useState<string | null>(null);
    const [url, setImage] = useUploadImage();
    const [setImageUrl] = useFetchImageDetails(url);

    useEffect(() => {
        console.log("resetting image state");
        dispatch(resetImageState());
        return () => {
            dispatch(resetImageState());
            const root = document.documentElement;
            root.style.setProperty(
                "--main-page-grid-template-columns", "1fr")
            root.style.setProperty(
                "--main-page-grid-template-rows", "1fr")
            root.style.setProperty(
                "--main-page-grid-area", `"c1"`)
        }
    }, [dispatch])

    useEffect(() => {
        setImageUrl(url);
    }, [url, setImageUrl]);


    const capture = React.useCallback(() => {
        const image = cameraRef?.current?.getScreenshot({ width: 420, height: 420 });
        if (image) {
            setTmpImg(image);
        }
    }, [cameraRef]);


    const reCapture = () => {
        setTmpImg(null);
    }

    const sendImage = () => {
        if (!tmpImg)
            return;
        dispatch(resetImageState());
        const file = dataURLtoFile(tmpImg, 'captured-image.jpg');
        setImage(file);
        setTmpImg(null);
    }

    return (
        <div className='web-camera'>
            {/* styles.container */}
            {
                tmpImg
                    ? <img src={tmpImg} />
                    : <Webcam
                        audio={false}
                        videoConstraints={videoConstraints}
                        ref={cameraRef}
                        screenshotFormat='image/jpeg'
                        height={420}
                        width={420}
                    />
            }
            <Button onClickHandler={tmpImg ? reCapture : capture}>
                {tmpImg ? "RECAPTURE" : "CAPTURE"}
            </Button>
            {
                tmpImg &&
                <Button onClickHandler={sendImage}>
                    Send
                </Button>
            }
        </div >
    )
}
