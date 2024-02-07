import React from "react"
import { ResponseObj } from "../../types";
import  styles from "./ImageInfo.module.scss"

interface ImageInfoProps {
    imageData: ResponseObj | undefined;
}

const ImageInfo: React.FC<ImageInfoProps> = ({ imageData }) => {
    return (
        imageData &&
        <div className={styles.container}>
            <img src={imageData.imageURL} />
            <div>
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

