import styles from "./ImageInfo.module.scss"
import { ImageSliceInitial } from "../../redux/slices/imageSlice";
import { useAppSelector } from "../../hooks";
import ReactLoading from 'react-loading'


const ImageInfo = () => {
    const { wasteType, info, loading, error } = useAppSelector(state => state.image) as ImageSliceInitial;

    return (
        loading ? <ReactLoading className="loader" />
            : error ?
                <pre> {error} </pre>
                :
                // {styles.imageContainer}
                <div className='details'>
                    <h1 className='details__heading'>
                        <span className='green bold'>Image</span> Details
                    </h1>
                    {/*styles.info*/}
                    <div className='details__matter'>
                        {/*styles.heading*/}
                        <h3 className='details__matter__heading'>
                            {wasteType}
                        </h3>
                        {/*styles.information*/}
                        <p className='details__matter__para'>
                            {info}
                        </p>
                    </div>
                </div>
    )
}


export default ImageInfo;

