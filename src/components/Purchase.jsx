import "../styles/Purchase.css";

function Purchase({ total, status, description, value, tax }) {
  return (
    <div className={`purchaseWrapper ${status}`}>
      <ul>
        <li>{description}</li>
        <li>R$ {value}</li>
        <li>{tax}%</li>
      </ul>
      <h3>{total ? `$${total}` : `não foi possível calcular o valor`}</h3>
    </div>
  );
}

export default Purchase;
