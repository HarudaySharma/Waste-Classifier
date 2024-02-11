import styles from  "./Home.module.scss"
import Header from "../../components/ui/Header/Header";
import icon1 from '../../assets/vector.png'
import icon2 from '../../assets/upload.png'
import border from '../../assets/rectangle-2-stroke.png'
import rightImage from '../../assets/homeImage.jpg'


function Home() {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.bodyContent}>
                <div className={styles.leftContent}>
                    <h1 className={styles.heading1}>WASTE</h1>
                    <h1 className={styles.heading2}>CLASSIFIER</h1>
                    <div className={styles.buttonContainer}>
                        <button className={styles.iconButton}>
                            <img src={icon1} alt="scanIcon" className={styles.icon}/>
                            SCAN
                        </button>
                        <button className={styles.iconButton}>
                            <img src={icon2} alt="uploadIcon" className={styles.icon}/>
                            UPLOAD
                        </button>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.border}>
                        <img src={border} alt="border"/>
                    </div>

                    <img src={rightImage} alt="homeImage" className={styles.bigImage}/>
                </div>
            </div>
        </div>
    );
}
export default Home;
