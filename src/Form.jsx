import { useState } from "react";
import "./Form.css";

function Form() {
  const [purchase, setPurchase] = useState({
    status: "pendente",
    description: "",
    value: "",
    tax: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePurchase(purchase)) {
      alert("adiciona na lista global");
    } else {
      alert("purchase nao valido");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPurchase({ ...purchase, [name]: value });
  };

  const validateNumber = (number) => !isNaN(number) && number >= 0;
  const validateText = (text) => text.length > 2;

  const validatePurchase = (purchase) => {
    return (
      validateText(purchase.description) &&
      validateNumber(purchase.value) &&
      validateNumber(purchase.tax)
    );
  };

  return (
    <div className="FormWrapper">
      <h3 className="formTitle">Informe sua próxima compra de dólar</h3>
      <form id="purchaseForm">
        <div className="formRow">
          <label htmlFor="description">Descrição</label>
          <input type="text" name="description" onChange={handleChange} />
        </div>
        <div className="formRow">
          <label htmlFor="value">Valor (R$)</label>
          <input type="text" name="value" onChange={handleChange} />
        </div>
        <div className="formRow">
          <label htmlFor="value">Taxa (%)</label>
          <input type="text" name="tax" onChange={handleChange} />
        </div>
        <div className="right">
          <input
            type="submit"
            name="submit"
            value="Enviar"
            className="btnSubmit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
