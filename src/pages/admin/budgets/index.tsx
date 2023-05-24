import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { ListBudgetAction } from "../../../redux/actions/BudgetActions";
import { RootState } from "../../../redux/store";

const AdminBudgets = () => {
  useDocumentTitle("Três Brinde | Budgets");

  const dispatch = useDispatch();
  const budgetList = useSelector((state: RootState) => state.budgetList);
  const { budget } = budgetList;

  useEffect(() => {
    if (!budget) {
      dispatch(ListBudgetAction());
    }
  }, [dispatch, budget]);

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      sorter: true,
      key: "email",
    },
    {
      title: "NIF",
      dataIndex: "NIF",
      key: "NIF",
    },
    {
      title: "Nome da empresa",
      dataIndex: "company_name",
      sorter: true,
      key: "company_name",
    },
    {
      title: "País",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Código postal",
      dataIndex: "postal_code",
      key: "postal_code",
    },
    {
      title: "Cidade",
      dataIndex: "city",
      sorter: true,
      key: "city",
    },
    {
      title: "Morada",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Contacto",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Preço estimado",
      dataIndex: "expectedPrice",
      key: "expectedPrice",
    },
    {
      title: "Descrição",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Quantidade do produto",
      dataIndex: "budgetProducts",
      key: "budgetProducts",
    },
  ];

  return (
    <div>
      <Table
        style={{ minWidth: "500px", overflowX: "scroll" }}
        columns={columns}
        dataSource={budget}
      />
    </div>
  );
};

export default AdminBudgets;
