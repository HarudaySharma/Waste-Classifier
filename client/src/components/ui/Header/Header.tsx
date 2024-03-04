import styles from "./Header.module.scss"
import logo from '../../../assets/logo.png'
import icon from '../../../assets/address-book.png'
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className={`${styles.navbar} header__nav`}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>

            <div className={styles.navButtons}>
                <Button
                    className={styles.navButton}
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}
                >
                    <span>Home</span>
                </Button>
                <Button
                    className={styles.navButton}
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/info');
                    }}
                >
                    <span>Info</span>
                </Button>
                <Button
                    className={styles.navButton}
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/notcreated');
                    }}
                >
                    <span>Goals</span>
                </Button>
                <Button
                    className={styles.navButton}
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/about');
                    }}
                >
                    <span>About Us</span>
                </Button>
                <Button
                    className={styles.navButton}
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/contact');
                    }}
                >
                    <img src={icon} alt="Contact Icon" className={styles.icon} />
                </Button>
            </div>

        </nav>
    )
}

export default Header;
