import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Button from '../ui/Button/Button';
import useUploadImage from '../../hooks/useUploadImage';
import { dataURLtoFile } from '../../utils/dataURLtoFile';
import useFetchImageDetails from '../../hooks/useFetchImageDetails';
import { useAppDispatch } from '../../hooks';
import { resetImageState } from '../../redux/slices/imageSlice';
import ChangeButton from '../ChangeButton';
import { DataEndpointSwitch } from '../DataEndpointSwitch';

const videoConstraints: MediaTrackConstraints = {
    facingMode: "user",
};

const CustomWebCam = () => {
    const dispatch = useAppDispatch();
    const cameraRef = useRef<Webcam>(null);
    const [capturedImg, setTmpImg] = useState<string | null>(null);
    const [url, setImage, uploadTaskRef] = useUploadImage();
    const [setImageUrl, setRequestOption, abortController] = useFetchImageDetails(url);

    useEffect(() => {
        return () => {
            // abort the request if user changes the page
            if (uploadTaskRef.current) uploadTaskRef.current.cancel();
            if (abortController.current) abortController.current.abort();
            dispatch(resetImageState());
        }
    }, [])

    useEffect(() => {
        if (url) {
            setImageUrl(url);
        }
    }, [url, setImageUrl]);


    const capture = React.useCallback(() => {
        const image = cameraRef?.current?.getScreenshot();
        if (image) {
            setTmpImg(image);
        }
    }, [cameraRef]);


    const reCapture = () => {
        setTmpImg(null);
    }

    const sendImage = () => {
        if (!capturedImg)
            return;
        dispatch(resetImageState());
        const file = dataURLtoFile(capturedImg, 'captured-image.jpg');
        setImage(file);
        setTmpImg(null);
    }

    /* *********UI Components********************* */
    const LiveCamera = () => {
        if (capturedImg)
            return <img src={capturedImg} />;
        return <Webcam
            audio={false}
            disablePictureInPicture={true}
            videoConstraints={videoConstraints}
            ref={cameraRef}
            screenshotFormat='image/jpeg'
            className='web-camera__camera'
        />
    }

    const CameraButtons = () => {
        return (
            <Button
                className='web-camera__camera__btn1'
                onClickHandler={capturedImg ? reCapture : capture}
            >
                {capturedImg ? "ReCapture" : "Capture"}
            </Button>
        )
    }

    const SendButton = () => {
        if (capturedImg) {
            return (
                <Button
                    onClickHandler={sendImage}
                    className='web-camera__camera__btn1'
                >
                    Send
                </Button>
            )
        }
    }

    /*** handlers ****/
    const endpointSwitchHandler = (checked: boolean) => {
        if(checked) {
            setRequestOption('OWN_MODEL');
        }
        else {
            setRequestOption('GEMINI');
        }
    }


    return (
        <div className='web-camera'>
            <LiveCamera />
            <div className='web-camera__buttons'>
                <CameraButtons />
                <SendButton />
            </div>
            <ChangeButton switchTo='upload' />
            <DataEndpointSwitch endpointSwitchHandler={endpointSwitchHandler}/>
        </div >
    )
}

export default CustomWebCam;
