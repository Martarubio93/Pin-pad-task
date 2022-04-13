import '../styles/layout/Header.scss';
import icon from '../images/letter-u.png';

const Header = () => {
    return (
        <header className="header">
            <img src={icon} alt="icon"/>
            <p>Urban Data Collective Challenge</p>

        </header>
    )
}



export default Header