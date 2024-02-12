import styles from "./Home.module.scss"
import Header from "../../components/ui/Header/Header";
import Button from "../../components/ui/Button/Button";
import icon1 from '../../assets/vector.png'
import icon2 from '../../assets/upload.png'
import rightImage from '../../assets/homeImage.jpg'
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.bodyContent}>
                <div className={styles.leftContent}>
                    <h1 className={styles.heading1}>WASTE</h1>
                    <h1 className={styles.heading2}>CLASSIFIER</h1>
                    <div className={styles.buttonContainer}>
                        <Button
                            className={styles.iconButton}
                            onClickHandler={(e) => {
                                e.preventDefault();
                                navigate('/main');
                            }}
                        >
                            <img
                                src={icon1}
                                alt="scanIcon"
                                className={styles.scanIcon}
                            />
                            <span>SCAN</span>
                        </Button>
                        <Button
                            className={styles.iconButton}
                            onClickHandler={(e) => {
                                e.preventDefault();
                                navigate('/main');
                            }}
                        >
                            <img
                                src={icon2}
                                alt="uploadIcon"
                                className={styles.uploadIcon}
                            />
                            <span>UPLOAD</span>
                        </Button>
                    </div>
                </div>
                <div className={styles.square}>
                    <div className={styles.border}>
                    </div>
                    <img
                        src={rightImage}
                        alt="homeImage"
                        className={styles.rightImage}
                    />
                </div>
            </div>
        </div>
    );
    }
export default Home;
