import React, { useRef } from "react";
import { CreateBudgetAction } from "../../../../redux/actions/BudgetActions";

const BudgetForm = (history: any, cartItens: any, dispatch: any) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const adressRef = useRef(null);
  const zipcodeRef = useRef(null);
  const messageRef = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("teupai");
        CreateBudgetAction(
          {
            budgets: cartItens,
            toEmail: checkRef(emailRef),
            name: checkRef(nameRef),
            address: checkRef(adressRef),
            zipCode: checkRef(zipcodeRef),
            message: checkRef(messageRef),
          },
          history,
          () => dispatch
        );
      }}
    >
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
            type="text"
            placeholder="0000000"
            maxLength={7}
            ref={zipcodeRef}
            required
          />
        </label>
      </div>
      <h3>Mensagem</h3>
      <div className="message">
        <textarea
          placeholder="adiciona uma mensagem ao teu pedido"
          ref={messageRef}
        ></textarea>
      </div>
      <div className="operations">
        <a href="/">Cancelar</a>
        <button>Solicitar orçamento</button>
      </div>
    </form>
  );
};

const checkRef = (ref: any) => {
  if (ref != null) {
    return ref.current.value;
  }
};
export default BudgetForm;
