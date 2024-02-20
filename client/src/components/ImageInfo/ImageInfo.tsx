import React from "react"
import { ResponseObj } from "../../types";
import  styles from "./ImageInfo.module.scss"

interface ImageInfoProps {
    imageData: ResponseObj | undefined;
}

const ImageInfo: React.FC<ImageInfoProps> = ({ imageData }) => {
    return (
        imageData &&
        <div className={styles.imageContainer}>
            <img className={styles.image} src={imageData.imageURL} />
            <div className={styles.info}>
                <h3 className={styles.heading}>
                    {imageData.heading}
                </h3>
                <p className={styles.information}>
                    {imageData.information}
                </p>
            </div>
        </div>
    )
}


export default ImageInfo;

