import { StyledMessage } from "./styles/StyledMessage.styled";

function Message({ message, status }) {
  return (
    <StyledMessage>
      <p className={status}>{message}</p>
    </StyledMessage>
  );
}

export default Message;
