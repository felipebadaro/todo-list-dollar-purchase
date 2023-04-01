import { useContext } from "react";
import "../styles/Purchase.css";
import { PurchasesContext } from "../contexts/PurchasesContext";

function Purchase({ id, status, description, value, tax, total }) {
  const { purchases, addPurchase } = useContext(PurchasesContext);

  const handleBuy = (e, id) => {
    const newPurchases = changePurchaseStatus(id);
    addPurchase(newPurchases);
    hideBtnBuy(e.target);
  };

  const changePurchaseStatus = (id) => {
    const newPurchases = purchases;
    newPurchases.forEach((purchase, index) => {
      if (purchase.id === id) {
        purchase.status = "purchased";
      }
    });

    return newPurchases;
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
      {status == "pending" ? (
        <button className="btnBuy" onClick={(e) => handleBuy(e, id)}>
          Comprou?
        </button>
      ) : (
        <p className="statusTextPending">Comprado</p>
      )}
    </div>
  );
}

export default Purchase;
