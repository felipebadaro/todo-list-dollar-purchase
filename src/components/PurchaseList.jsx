import Purchase from "../components/Purchase";
import { useContext, useEffect } from "react";
import { PurchasesContext } from "../contexts/PurchasesContext";
import { cotationAPIURL, IOF } from "../utils/config";
import useFetch from "../hooks/useFetch.jsx";
import { StyledPurchaseList } from "./styles/StyledPurchaseList.styled";

function PurchaseList() {
  const { purchases } = useContext(PurchasesContext);

  const { data, loading, error } = useFetch(cotationAPIURL);

  if (error) {
    console.log(error);
  }

  const calculateValueInDollar = (cotationData, purchase) => {
    const allTaxes = parseFloat(purchase.tax) + parseFloat(IOF);
    if (cotationData) {
      return (purchase.value / cotationData.USDBRL.bid - allTaxes).toFixed(2);
    } else {
      return null;
    }
  };

  return (
    <StyledPurchaseList>
      {purchases.length > 0 ? (
        purchases.map((purchase) => {
          return (
            <Purchase
              key={purchase.id}
              {...purchase}
              total={calculateValueInDollar(data, purchase)}
            />
          );
        })
      ) : (
        <p>Nenhuma compra cadastrada.</p>
      )}
    </StyledPurchaseList>
  );
}

export default PurchaseList;
