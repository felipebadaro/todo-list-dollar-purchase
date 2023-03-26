import "../styles/Message.css";

function Message({ message, status }) {
  return (
    <div className="messageWrapper">
      <p className={status}>{message}</p>
    </div>
  );
}

export default Message;
