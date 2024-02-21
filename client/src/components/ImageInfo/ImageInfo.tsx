import styles from "./ImageInfo.module.scss"
import { ImageSliceInitial } from "../../redux/slices/imageSlice";
import { useAppSelector } from "../../hooks";


const ImageInfo = () => {
    const image = useAppSelector(state => state.image) as ImageSliceInitial;

    return (
        image.loading ? "please wait"
            : image.error ?
                <pre> {image.error} </pre>
                :
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image.imageUrl!} />
                    <div className={styles.info}>
                        <h3 className={styles.heading}>
                            {image.wasteType}
                        </h3>
                        <p className={styles.information}>
                            {image.info}
                        </p>
                    </div>
                </div>
    )
}


export default ImageInfo;

