import "../styles/PurchaseList.css";
import Purchase from "../components/Purchase";
import { useContext } from "react";
import { PurchasesContext } from "../contexts/PurchasesContext";

function PurchaseList() {
  const { purchases } = useContext(PurchasesContext);

  return (
    <div className="purchaseListWrapper">
      {purchases.length > 0 ? (
        purchases.map((purchase) => (
          <Purchase key={purchase.key} {...purchase} />
        ))
      ) : (
        <p>Nenhum compra cadastrada.</p>
      )}
    </div>
  );
}

export default PurchaseList;
