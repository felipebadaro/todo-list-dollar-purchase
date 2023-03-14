import dolarImg from "../assets/dolar.webp";
import "../styles/Logo.css";

function Logo() {
  return (
    <div className="logoWrapper">
      <img src={dolarImg} alt="Dolar Logo" />
    </div>
  );
}

export default Logo;
