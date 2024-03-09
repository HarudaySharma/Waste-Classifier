import Header from "../../components/ui/Header/Header";
import Button from "../../components/ui/Button/Button";
import icon1 from '../../assets/vector.png'
import icon2 from '../../assets/upload.png'
import rightImage from '../../assets/homeImage2.jpg'
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <Header />
            <main className='home__main'>
                <div className='home__main__column1'>
                    <h1 className='home__main__column1__heading1'>WASTE</h1>
                    <h1 className='home__main__column1__heading2'>CLASSIFIER</h1>
                    <div className='home__main__column1__buttons'>
                        <Button
                            className='home__main__column1__buttons__scan'
                            onClickHandler={(e) => {
                                e.preventDefault();
                                navigate('/main?type=scan');
                            }}
                        >
                            <img
                                src={icon1}
                                alt="scanIcon"
                                className='home__main__column1__buttons__scan__icon'
                            />
                            <span>SCAN</span>
                        </Button>
                        <Button
                            className='home__main__column1__buttons__upload'
                            onClickHandler={(e) => {
                                e.preventDefault();
                                navigate('/main?type=upload');
                            }}
                        >
                            <img
                                src={icon2}
                                alt="uploadIcon"
                                className='home__main__column1__buttons__upload__icon'
                            />
                            <span>UPLOAD</span>
                        </Button>
                    </div>
                </div>
                <div className='home__main__column2'>
                    <div className='home__main__column2__border'>
                    </div>
                    <img
                        src={rightImage}
                        alt="homeImage"
                        className='home__main__column2__rightImage'
                    />
                </div>
            </main>
        </div>
    );
}
export default Home;
