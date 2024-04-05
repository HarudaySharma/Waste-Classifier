import { useLocation } from 'react-router-dom';

export const ImageDetails = () => {
    const location = useLocation();
    const { imageUrl, highestRank } = location.state;

    return (
        imageUrl && highestRank &&
        <main className='details'>
            <h1 className='details__heading'>
                <span className='green bold'>Image</span> Details
            </h1>
            {/*styles.info*/}
            <div className='details__matter'>
                <img src={imageUrl} alt='waste image' className='details__matter__image' />
                {/*styles.heading*/}
                <h3 className='details__matter__heading'>
                    {highestRank.class}
                </h3>
                <h4 className='details__matter__percentage'>
                    Match Percentage <span className='bold green'>{+highestRank.score.toFixed(2) * 100}%</span>
                </h4>
                {/*styles.information*/}
                <p className='details__matter__para'>
                    {highestRank.about}
                </p>
            </div>
        </main>

    )
} 
