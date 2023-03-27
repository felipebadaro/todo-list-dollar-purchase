import "../styles/PurchaseList.css";
import Purchase from "../components/Purchase";
import { useContext, useEffect } from "react";
import { PurchasesContext } from "../contexts/PurchasesContext";
import { cotationAPIURL } from "../utils/config";
import useFetch from "../hooks/useFetch.jsx";

function PurchaseList() {
  const { purchases } = useContext(PurchasesContext);

  const { data, loading, error } = useFetch(cotationAPIURL);

  if (error) {
    console.log(error);
  }

  const calculateValueInDollar = (cotationData, purchase) => {
    if (cotationData) {
      return (purchase.value * cotationData.USDBRL.bid - purchase.tax).toFixed(
        2
      );
    } else {
      return null;
    }
  };

  return (
    <div className="purchaseListWrapper">
      {purchases.length > 0 ? (
        purchases.map((purchase) => (
          <Purchase
            key={purchase.key}
            total={calculateValueInDollar(data, purchase)}
            {...purchase}
          />
        ))
      ) : (
        <p>Nenhum compra cadastrada.</p>
      )}
    </div>
  );
}

export default PurchaseList;
