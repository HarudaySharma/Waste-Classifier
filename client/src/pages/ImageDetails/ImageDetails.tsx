import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { HighestRank } from '../../types';

interface LocationStateType{
    imageUrl: string;
    highestRank: HighestRank;
}

export const ImageDetails = () => {
    const location = useLocation();
    const { imageUrl, highestRank } = location.state as LocationStateType;

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
                <h3 title='waste type' aria-label='waste type'  className='details__matter__heading'>
                    {highestRank.class.replace(/-/g, ' ')}
                </h3>
                <h4 className='details__matter__percentage'>
                    Match Percentage <span className='bold green'>{+highestRank.score.toFixed(2) * 100}%</span>
                </h4>
                {/*styles.information*/}
                <ReactMarkdown
                    children={highestRank.about}
                    className='details__matter__main'
                />
            </div>
        </main>

    )
} 
