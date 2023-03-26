import "../styles/PurchaseList.css";
import Purchase from "../components/Purchase";
import { useContext, useEffect, useRef, useState } from "react";
import { PurchasesContext } from "../contexts/PurchasesContext";

function PurchaseList() {
  const { purchases, addPurchase } = useContext(PurchasesContext);
  const pendent = "pendent";
  const purchased = "purchased";
  return (
    <div className="purchaseListWrapper">
      {purchases.map((purchase) => (
        <Purchase key={purchase.key} {...purchase} />
      ))}
    </div>
  );
}

export default PurchaseList;
