import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Button from '../ui/Button/Button';
import uploadIcon from '../../assets/upload.png'
import useUploadImage from '../../hooks/useUploadImage';
import { dataURLtoFile } from '../../utils/dataURLtoFile';
import useFetchImageDetails from '../../hooks/useFetchImageDetails';
import { useAppDispatch } from '../../hooks';
import { resetImageState } from '../../redux/slices/imageSlice';
import { useSearchParams } from 'react-router-dom';

const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user"
};

export const CustomWebCam = () => {
    const dispatch = useAppDispatch();
    const cameraRef = useRef(null);
    const [, setURLSearchParams] = useSearchParams();
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
                        disablePictureInPicture={true}
                        videoConstraints={videoConstraints}
                        ref={cameraRef}
                        screenshotFormat='image/jpeg'
                        className='web-camera__camera'
                        height={420}
                        width={420}
                    />
            }

            <div className='web-camera__buttons'>
                <Button
                    className='web-camera__camera__btn1'
                    onClickHandler={tmpImg ? reCapture : capture}
                >
                    {tmpImg ? "RECAPTURE" : "CAPTURE"}
                </Button>
                {
                    tmpImg &&
                    <Button
                        onClickHandler={sendImage}
                        className='web-camera__camera__btn1'
                    >
                        Send
                    </Button>
                }
            </div>
            <Button className='change-btn' onClickHandler={() => setURLSearchParams({ type: 'upload' })}>
                <img
                    src={uploadIcon}
                    alt="uploadIcon"
                    className='home__main__column1__buttons__upload__icon'
                />
                Upload
            </Button>
        </div >
    )
}
