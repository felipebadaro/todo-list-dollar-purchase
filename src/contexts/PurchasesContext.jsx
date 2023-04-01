import React, { createContext, useState } from "react";

export const PurchasesContext = createContext();

export const PurchasesProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);

  const addPurchase = (newPurchases) => {
    setPurchases([...newPurchases]);
  };

  return (
    <PurchasesContext.Provider value={{ purchases, addPurchase }}>
      {children}
    </PurchasesContext.Provider>
  );
};
