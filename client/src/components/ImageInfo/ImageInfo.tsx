import { ImageSliceInitial } from "../../redux/slices/imageSlice";
import { useAppSelector } from "../../hooks";
import ReactLoading from 'react-loading'
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import HorizontalBars from "../ui/Range/HorizontalBars";
import { DisplayError } from "../DisplayError";

const ImageInfo = () => {
    const navigate = useNavigate();
    const { classes, imageUrl, highestRank, loading, error } = useAppSelector(state => state.image) as ImageSliceInitial;

    return (
        <div className='image-info'>
            <h1 className='image-info__heading'>
                <span className='green bold'>Image</span> Details
            </h1>
            <div className="image-info__matter">
            {imageUrl && <img className='waste-img' src={imageUrl} />}
            {loading && <ReactLoading type="bars" className="loader" />}
            {error && <DisplayError errorMessage="error connecting to server" />}
            {!loading && !error &&
                        <div className='image-info__matter__chart'>
                            <HorizontalBars dataset={classes} />
                            <Button className='know-more-btn' onClickHandler={() => {
                                navigate('/main/imagedetails', { state: { imageUrl, highestRank } });
                            }} >
                                Know More !
                            </Button>
                        </div>
            }
            </div>
        </div>
    )
}


export default ImageInfo;

// <h1 className='details__heading'>
//    <span className='green bold'>Image</span> Details
//    </h1>
//    {/*styles.info*/}
// <div className='details__matter'>
// {/*styles.heading*/}
// <h3 className='details__matter__heading'>
// {wasteType}
// </h3>
// {/*styles.information*/}
// <p className='details__matter__para'>
// {info}
// </p>
// </div>
