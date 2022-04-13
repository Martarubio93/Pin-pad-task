import icon from '../images/letter-u (2).png';
import '../styles/layout/IconComponent.scss';

const IconComponent = () =>{
    return <div className="iconContainer">
    <img className="iconContainer__icon"src={icon} alt="icon"/>
    <h1 className="iconContainer__title">Urban Data Collective Challenge</h1>
    </div>
}

export default IconComponent