import { useState } from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import ImageInfo from '../../components/ImageInfo/ImageInfo';
import { ResponseObj } from '../../types';
import styles from "./index.module.scss"


const ParentContainer = () => {
    const [imageData, setImageData] = useState<ResponseObj | undefined>();

    const liftState = (state: ResponseObj) => {
        setImageData(state);
    }
    return (
        <div className={styles.container}>
            <ImageUpload liftState={liftState} />
            <ImageInfo imageData={imageData} />
        </div>
    )
}

export default ParentContainer
