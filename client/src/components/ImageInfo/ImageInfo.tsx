import { ImageSliceInitial } from "../../redux/slices/imageSlice";
import { useAppSelector } from "../../hooks";
import ReactLoading from 'react-loading'
import RangeComponent from "../ui/Range/RangeComponent";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";

const ImageInfo = () => {
    const navigate = useNavigate();
    const { classes, loading, error } = useAppSelector(state => state.image) as ImageSliceInitial;

    const ClassRanges = () => {
        return (
            <ul>
                {
                    classes.map(obj =>
                        <li key={obj.class}>
                            <span className='green bold'> {obj.class} </span>
                            <RangeComponent
                                rangeInPercent={+obj.score.toFixed(6)}
                            />
                            {obj.score.toFixed(6)}%
                        </li>
                    )
                }
            </ul>
        )
    }

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
                    <ClassRanges />
                    <Button onClickHandler={() => {
                        console.log('clicked');
                        navigate('imagedetails');
                    }} >

                        Know More
                    </Button>
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
