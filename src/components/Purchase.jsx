import { useContext } from "react";
import "../styles/Purchase.css";
import { PurchasesContext } from "../contexts/PurchasesContext";

function Purchase({ id, status, description, value, tax, total }) {
  const { purchases, setPurchases } = useContext(PurchasesContext);
  const handleBuy = (e, id) => {
    // hideBtnBuy(e.target);
    //findTheObjectByIdAndReplaceTheStatus
  };

  const hideBtnBuy = (btn) => {
    btn.style.display = "none";
  };
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
      <button className="btnBuy" onClick={(e) => handleBuy(e, id)}>
        Comprou?
      </button>
    </div>
  );
}

export default Purchase;
