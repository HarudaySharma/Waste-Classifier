import logo from '../../../assets/logo.png'
import icon from '../../../assets/address-book.png'
import openIcon from "../../../assets/hamburger.svg"
import closeIcon from "../../../assets/close.svg"
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


type CallbackFunction = () => void;
let openMobile: CallbackFunction | null = null;
let closeMobile: CallbackFunction | null;

const Header = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const loadMobileScript = async () => {
            const { openMobileMenu, closeMobileMenu } = await import('./mobileScript.js');
            openMobile = openMobileMenu;
            closeMobile = closeMobileMenu;
        };

        loadMobileScript();
    }, []);

    const navOpenHandler = () => {
        if (openMobile)
            openMobile();
    }

    const onCloseHandle = () => {
        if (closeMobile)
            closeMobile();
    }

    return (
        <nav className='nav'>
            <div className={`nav__logo`}>
                <img src={logo} alt="logo" />
            </div>

            <Button
                id='nav-open'
                className="nav__open"
                aria_expanded={false}
                aria_labelledby="nav-label"
                onClickHandler={navOpenHandler}
            >
                <img src={openIcon} alt="" width="40" height="24" />
            </Button>
            <div className='nav__menu' role='dialog' aria-labelledby='nav-label'>
                <Button
                    id='nav-close'
                    className="nav__close"
                    aria_label="Close"
                    onClickHandler={onCloseHandle}
                >
                    <img src={closeIcon} alt="" width="28" height="27" />
                </Button>

                <div className='nav__menu__buttons'>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            navigate('/');
                        }}
                    >
                        <span>Home</span>
                    </Button>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            navigate('/info');
                        }}
                    >
                        <span>Info</span>
                    </Button>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            navigate('/goals');
                        }}
                    >
                        <span>Goals</span>
                    </Button>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            navigate('/about');
                        }}
                    >
                        <span>About Us</span>
                    </Button>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            navigate('/contact');
                        }}
                    >
                        <img src={icon} alt="Contact Icon" className='nav__menu__buttons__button__icon' />
                    </Button>
                </div>
            </div>

        </nav>
    )
}

export default Header;
