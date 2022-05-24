import { useDispatch, useSelector } from "react-redux";
import {  register } from "../../../redux/actions/AuthActions";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Logo from "../../../images/Logo.svg";
import AuthImage from "../../../images/auth.svg";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";

const Register = () => {
  useDocumentTitle("Três Brinde | Registro");

  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values: any) => {
    dispatch(register(values.name, values.email, values.password, history));
  };
 
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const { user } = userInfo;

  useEffect(() => {
    if (user) {
      history.push("/");
    }
      // eslint-disable-next-line
  }, [user]);

  return (
    <div className="auth-container">
      <Form
        name="basic"
        layout="vertical"
        className="auth-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="auth-sider">
          <Link to="/">
            <img src={Logo} alt="Logo Tres Brinde" className="auth-logo" />
          </Link>
          <img src={AuthImage} alt="Ilustração" className="auth-ilustration" />
        </div>
        <div className="auth-form-container">
          <div className="auth-form-inputs">
            <h2> Criar Conta</h2>
            <p className="color-blue "> Cria a tua conta aqui.</p>

            <Form.Item
              className="margin-top-2-size"
              label="Nome e Apelido"
              name="name"
              required
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="margin-top-2-size"
              label="E-mail"
              name="email"
              rules={[
                { type: "email", required: true, message: "Email incorrecto" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Tem que inserir a sua password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirmar Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor, confirma a tua password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("As passwords nao coincidem!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Registar
              </Button>
              <p className="margin-top-2-size">
                Ja tens uma conta?
                <Link to="/register"> Faz o Login Aqui</Link>
              </p>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default Register;
