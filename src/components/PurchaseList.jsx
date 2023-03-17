import "../styles/PurchaseList.css";
import Purchase from "../components/Purchase";
function PurchaseList() {
  const pendent = "pendent";
  const purchased = "purchased";
  return (
    <div className="purchaseListWrapper">
      <Purchase status={pendent} description={`Renda variável`} />
      <Purchase status={pendent} description={`Renda fixa`} />
      <Purchase status={pendent} description={`Ações`} />
      <Purchase status={purchased} description={`Ações`} />
      <Purchase status={pendent} description={`Fundo`} />
      <Purchase status={pendent} description={`Renda variável`} />
      <Purchase status={pendent} description={`Renda fixa`} />
      <Purchase status={purchased} description={`Fundo`} />
      <Purchase status={purchased} description={`Renda variável`} />
    </div>
  );
}

export default PurchaseList;
