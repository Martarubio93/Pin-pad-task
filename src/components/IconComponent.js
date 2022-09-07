import icon from "../images/letter-u (2).png";
import "../styles/layout/IconComponent.scss";

const IconComponent = () => {
  return (
    <div className="iconContainer">
      <a href="/">
        <img className="iconContainer__icon" src={icon} alt="icon" />
      </a>
    </div>
  );
};

export default IconComponent;
