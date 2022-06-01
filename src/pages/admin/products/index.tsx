import { Button, Popconfirm, Space, Table } from "antd";
import { useEffect } from "react";
import { Edit2, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { ListProductsAction } from "../../../redux/actions/productActions";
import { RootState } from "../../../redux/store";
import { useHistory } from "react-router-dom";


const AdminProducts = () => {
  useDocumentTitle("Três Brinde | Produtos");

  const dispatch = useDispatch();

  const productsList = useSelector((state: RootState) => state.productList);
  const { products } = productsList;
  const history = useHistory();

  const confirmDelete = (id: number) => {
    // dispatch(deleteCategory(id));
  };

  const confirmEdit = (id: number) => {
    history.push(`/admin/products/edit/${id}`);
  };

  useEffect(() => {
    if (!products) {
      dispatch(ListProductsAction(20, "0"));
    }
  }, [dispatch, products]);

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      sorter: true,
      key: "productName",
    },
    {
      title: "Referencia",
      dataIndex: "catalogReference",
      key: "catalogReference",
    },
    {
      title: "Preço",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "",
      key: "action",
      width: "10%",
      render: (index: any) => (
        <Space size="middle">
          <Button
            shape="circle"
            type="link"
            icon={<Edit2 />}
            onClick={() => confirmEdit.bind(this)(index.id)}
          />

          <Popconfirm
            title="Tem a certeza？"
            onConfirm={() => confirmDelete.bind(this)(index.id)}
            okText="Sim"
            cancelText="Não"
          >
            <Button shape="circle" type="link" icon={<Trash2 color="red" />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Link to="/admin/products/create">
        <Button type="primary" style={{ marginBottom: 16 }}>
          {" "}
          Create Product
        </Button>
      </Link>
      <Table columns={columns} dataSource={products} />
    </div>
  );
};

export default AdminProducts;
