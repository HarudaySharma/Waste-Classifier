import logo from '../../../assets/logo.png'
import icon from '../../../assets/address-book.png'
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className='nav'>
            <div className={`nav__logo`}>
                <img src={logo} alt="logo"/>
            </div>

            <div className='nav__buttons'>
                <Button
                    className='nav__buttons__button'
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}
                >
                    <span>Home</span>
                </Button>
                <Button
                    className='nav__buttons__button'
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/info');
                    }}
                >
                    <span>Info</span>
                </Button>
                <Button
                    className='nav__buttons__button'
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/goals');
                    }}
                >
                    <span>Goals</span>
                </Button>
                <Button
                    className='nav__buttons__button'
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/about');
                    }}
                >
                    <span>About Us</span>
                </Button>
                <Button
                    className='nav__buttons__button'
                    onClickHandler={(e) => {
                        e.preventDefault();
                        navigate('/contact');
                    }}
                >
                    <img src={icon} alt="Contact Icon" className='nav__buttons__button__icon' />
                </Button>
            </div>

        </nav>
    )
}

export default Header;
