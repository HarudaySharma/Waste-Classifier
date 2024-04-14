import { useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { ImageSliceInitial } from "../../redux/slices/imageSlice";

import ReactLoading from 'react-loading'
import HorizontalBars from "../ui/Range/HorizontalBars";
import Button from "../ui/Button/Button";
import { DisplayError } from "../DisplayError";

const ImageInfo = () => {
    const navigate = useNavigate();
    const {
        classes,
        imageUrl,
        highestRank,
        loading,
        error
    } = useAppSelector(state => state.image) as ImageSliceInitial;

    /* *******UI Components********* */
    const ShowImage = () => {
        if (imageUrl)
            return <img className='waste-img' src={imageUrl} />
    }

    const ShowLoading = () => {
        if (loading)
            return <ReactLoading type="bars" className="loader" />
    }

    const ShowError = () => {
        if (error)
            return <DisplayError errorMessage="error connecting to server" />
    }

    const ShowGraph = () => {
        if (!loading && !error) {
            return (
                <div className='image-info__matter__chart'>
                    <HorizontalBars dataset={classes} />
                    <Button className='know-more-btn' onClickHandler={() => {
                        navigate('/main/imagedetails', { state: { imageUrl, highestRank } });
                    }} >
                        Know More !
                    </Button>
                </div>
            )
        }
    }

    if (imageUrl) {
        return (
            <div className='image-info'>
                <h1 className='image-info__heading'>
                    <span className='green bold'>Image</span> Details
                </h1>
                <div className="image-info__matter">
                    <ShowImage />
                    <ShowLoading />
                    <ShowError />
                    <ShowGraph />
                </div>
            </div>
        )
    }

}

export default ImageInfo;
