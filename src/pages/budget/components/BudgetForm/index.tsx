import React, { useRef } from "react";

const BudgetForm = (onAction: any) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const adressRef = useRef(null);
  const zipcodeRef = useRef(null);
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <h3>Informaçōes pessoais</h3>
      <div className="customer-data">
        <label>
          <div>
            <span>*</span>Nome e apelido:
          </div>
          <input type="text" placeholder="seu nome" ref={nameRef} required />
        </label>
        <label>
          <div>
            <span>*</span>Email:
          </div>
          <input
            type="email"
            placeholder="example@email.com"
            ref={emailRef}
            required
          />
        </label>
        <label>
          <div>
            <span>*</span>Morada:
          </div>
          <input
            type="text"
            placeholder="confirma tua morada"
            ref={adressRef}
            required
          />
        </label>
        <label>
          <div>
            <span>*</span>código postal:
          </div>
          <input
            type="number"
            placeholder="0000000"
            ref={zipcodeRef}
            required
          />
        </label>
      </div>
      <h3>Mensagem</h3>
      <div className="message">
        <textarea placeholder="adiciona uma mensagem ao teu pedido"></textarea>
      </div>
      <div className="operations">
        <a href="/">cancelar</a>
        <button>Solicitar orçamento</button>
      </div>
    </form>
  );
};
export default BudgetForm;
