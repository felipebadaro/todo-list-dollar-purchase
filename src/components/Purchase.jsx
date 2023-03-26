import "../styles/Purchase.css";

function Purchase({ status, description, value, tax }) {
  return (
    <div className={`purchaseWrapper ${status}`}>
      <ul>
        <li>{description}</li>
        <li>R$ {value}</li>
        <li>{tax}%</li>
      </ul>
      <h3>$ 40</h3>
    </div>
  );
}

export default Purchase;
