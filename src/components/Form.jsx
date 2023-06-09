import { useContext, useEffect, useState } from "react";
import { PurchasesContext } from "../contexts/PurchasesContext";
import Message from "./Message";
import { StyledFormRow } from "./styles/StyledFormRow.styled";
import { StyledForm } from "./styles/StyledForm.styled";

function Form() {
  const purchaseBluePrint = {
    id: "",
    status: "pending",
    description: "",
    value: "",
    tax: "",
  };
  const messages = {
    success: "Compra cadastrada com sucesso.",
    error:
      "Ocorreu um erro ao cadastrar sua compra, tente novamente por favor.",
  };

  const [purchase, setPurchase] = useState(purchaseBluePrint);
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const { purchases, addPurchase } = useContext(PurchasesContext);

  useEffect(() => {
    setMessage("");
    setMessageStatus("");
  }, []);

  const showMessage = (message, messageStatus) => {
    setMessage(message);
    setMessageStatus(messageStatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePurchase(purchase)) {
      const newPurchase = { ...purchase, id: new Date().getTime().toString() };
      const newPurchases = purchases;
      newPurchases.push(newPurchase);
      addPurchase(newPurchases);
      clearForm();
      showMessage(messages.success, "success");
    } else {
      showMessage(messages.error, "error");
    }
  };

  const clearForm = () => {
    setPurchase(purchaseBluePrint);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPurchase({ ...purchase, [name]: value });
  };

  const validateNumber = (number) => !isNaN(number);
  const validateValue = (number) => validateNumber(number) && number > 0;
  const validateText = (text) => text.length > 2;

  const validatePurchase = (purchase) => {
    return (
      validateText(purchase.description) &&
      validateValue(purchase.value) &&
      validateNumber(purchase.tax)
    );
  };

  return (
    <>
      <Message message={message} status={messageStatus} />
      <StyledForm>
        <h3>Informe sua próxima compra de dólar</h3>
        <StyledFormRow>
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={purchase.description}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="value">Valor (R$)</label>
          <input
            type="text"
            name="value"
            onChange={handleChange}
            value={purchase.value}
          />
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="value">Taxa sem IOF (%)</label>
          <input
            type="text"
            name="tax"
            onChange={handleChange}
            value={purchase.tax}
          />
        </StyledFormRow>
        <div className="right">
          <input
            type="submit"
            name="submit"
            value="Enviar"
            onClick={handleSubmit}
          />
        </div>
      </StyledForm>
    </>
  );
}

export default Form;
