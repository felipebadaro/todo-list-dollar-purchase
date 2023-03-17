import "../styles/Purchase.css";

function Purchase({ status, description }) {
  return (
    <div className={`purchaseWrapper ${status}`}>
      <ul>
        <li>{description}</li>
        <li>R$ 200</li>
        <li>0.2%</li>
      </ul>
      <h3>$ 40</h3>
    </div>
  );
}

export default Purchase;
