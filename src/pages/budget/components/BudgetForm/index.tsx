import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CreateBudgetAction } from "../../../../redux/actions/BudgetActions";

const BudgetForm = (history: any, dispatch: any) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const adressRef = useRef(null);
  const zipcodeRef = useRef(null);
  const messageRef = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        CreateBudgetAction(
          {
            budgets: cartItems,
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
          <input type="text" placeholder="Teu nome" ref={nameRef} required />
        </label>
        <label>
          <div>
            <span>*</span>Email:
          </div>
          <input
            type="E-mail"
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
            placeholder="Confirma tua morada"
            ref={adressRef}
            required
          />
        </label>
        <label>
          <div>
            <span>*</span>Código-postal:
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
      <div className="message">
        <h3>Mensagem</h3>
        <textarea
          placeholder="Adiciona uma mensagem ao teu pedido"
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
