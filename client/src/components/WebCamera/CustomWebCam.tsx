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
    const [url, setImage, uploadTaskRef] = useUploadImage();
    const [setImageUrl, abortController] = useFetchImageDetails(url);

    useEffect(() => {
        return () => {
            // abort the request if user changes the page
            if (uploadTaskRef.current) uploadTaskRef.current.cancel();
            if (abortController.current) abortController.current.abort();
            dispatch(resetImageState());
        }
    }, [])

    useEffect(() => {
        if (url)
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
