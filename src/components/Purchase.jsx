import "../styles/Purchase.css";

function Purchase({ total, status, description, value, tax }) {
  return (
    <div className={`purchaseWrapper ${status}`}>
      <h2 className="total">
        {total ? `$${total}` : `não foi possível calcular o valor`}
      </h2>
      <hr />
      <p className="description">{description}</p>
      <ul>
        <li>Valor: R$ {value}</li>
        <li>Taxa: {tax}%</li>
      </ul>
    </div>
  );
}

export default Purchase;
