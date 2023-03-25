import React, { createContext, useState } from "react";

export const PurchasesContext = createContext();

export const PurchasesProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);

  const addPurchase = (purchase) => {
    const newPurchases = purchases;
    newPurchases.push(purchase);
    console.log("conteúdo atual do purchases", purchases);
    setPurchases(newPurchases);
  };

  return (
    <PurchasesContext.Provider value={{ purchases, addPurchase }}>
      {children}
    </PurchasesContext.Provider>
  );
};
