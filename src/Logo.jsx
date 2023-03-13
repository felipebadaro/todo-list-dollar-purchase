import dolarImg from "./assets/dolar.webp";
import "./Logo.css";

function Logo() {
  return (
    <div className="LogoWrapper">
      <img src={dolarImg} alt="Dolar Logo" />
    </div>
  );
}

export default Logo;
