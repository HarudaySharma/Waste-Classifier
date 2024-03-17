import logo from '../../../assets/logo.png'
import icon from '../../../assets/address-book.png'
import openIcon from "../../../assets/hamburger.svg"
import closeIcon from "../../../assets/close.svg"
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { LegacyRef, useEffect, useRef } from 'react';
import { closeMobileMenu, openMobileMenu, setupTopNav } from './mobileScript.ts';

const Header = () => {
    const navigate = useNavigate();
    const navMenuRef = useRef<HTMLDivElement>();
    const openBtnRef = useRef<HTMLButtonElement>();
    const closeBtnRef = useRef<HTMLButtonElement>();
    const matchMediaRef = useRef<MediaQueryList>();

    useEffect(() => {
        matchMediaRef.current = window.matchMedia('(width < 55.625rem');
        setupTopNav({ navMenuRef, openBtnRef, media: matchMediaRef.current, closeBtnRef });
        matchMediaRef.current.addEventListener('change', (e) => {
            setupTopNav({ media: e, navMenuRef, openBtnRef, closeBtnRef });
        });
    }, []);

    const navOpenHandler = () => {
            openMobileMenu({navMenuRef, openBtnRef, closeBtnRef});
    }

    const onCloseHandle = () => {
        if(matchMediaRef.current?.matches)
            closeMobileMenu({navMenuRef, openBtnRef, closeBtnRef});
    }

    return (
        <nav className='nav'>
            <div className={`nav__logo`}>
                <img src={logo} alt="logo" />
            </div>

            <Button
                btnRef={openBtnRef}
                id='nav-open'
                className="nav__open"
                aria_expanded={false}
                aria_labelledby="nav-label"
                onClickHandler={navOpenHandler}
            >
                <img src={openIcon} alt="" width="40" height="24" />
            </Button>
            <div
                ref={navMenuRef as LegacyRef<HTMLDivElement>}
                className='nav__menu'
                role='dialog'
                aria-labelledby='nav-label'
            >
                <Button
                    btnRef={closeBtnRef}
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
                            onCloseHandle();
                            navigate('/');
                        }}
                    >
                        <span>Home</span>
                    </Button>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            onCloseHandle();
                            navigate('/info');
                        }}
                    >
                        <span>Info</span>
                    </Button>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            onCloseHandle();
                            navigate('/goals');
                        }}
                    >
                        <span>Goals</span>
                    </Button>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            onCloseHandle();
                            navigate('/about');
                        }}
                    >
                        <span>About Us</span>
                    </Button>
                    <Button
                        className='nav__menu__buttons__button'
                        onClickHandler={(e) => {
                            e.preventDefault();
                            onCloseHandle();
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
