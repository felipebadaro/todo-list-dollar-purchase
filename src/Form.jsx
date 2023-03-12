import "./Form.css";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entrei no handleSubmit!");
  };

  const validateNumber = (number) => {
    return !isNaN(number) && number > 0;
  };

  const validateText = (text) => {
    return text.length > 2;
  };

  return (
    <div className="FormWrapper">
      <h3 className="formTitle">Informe sua próxima compra em dólar</h3>
      <form id="todoListForm">
        <div className="formRow">
          <label htmlFor="description">Descrição:</label>
          <input type="text" name="description" />
        </div>
        <div className="formRow">
          <label htmlFor="value">Valor (R$):</label>
          <input type="text" name="value" />
        </div>
        <div className="formRow">
          <label htmlFor="value">Taxa (%):</label>
          <input type="text" name="value" />
        </div>
        <div className="formRow">
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
