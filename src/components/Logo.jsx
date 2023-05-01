import dolarImg from "../assets/dolar.webp";
import { StyledLogo } from "./styles/StyledLogo.styled";

function Logo() {
  return (
    <StyledLogo>
      <img src={dolarImg} alt="Dolar Logo" />
    </StyledLogo>
  );
}

export default Logo;
