import "../styles/PurchaseList.css";
import Purchase from "../components/Purchase";
import { useContext } from "react";
import { PurchasesContext } from "../contexts/PurchasesContext";

function PurchaseList() {
  const { purchases } = useContext(PurchasesContext);

  return (
    <div className="purchaseListWrapper">
      {purchases.map((purchase) => (
        <Purchase key={purchase.key} {...purchase} />
      ))}
    </div>
  );
}

export default PurchaseList;
