import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { Table, Space, Button } from "antd";
import { Edit2, Trash2 } from "react-feather";
import { Popconfirm } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import {
  deleteCategory,
  ListCategories,
} from "../../../redux/actions/categoryActions";

const AdminCategories = () => {
  useDocumentTitle("Três Brinde | Categories");

  const dispatch = useDispatch();
  const history = useHistory();

  const categoriesList = useSelector((state: RootState) => state.categoryList);
  const { categories } = categoriesList;

  const categoryDelete = useSelector(
    (state: RootState) => state.categoryDelete
  );
  const {
    success: successDelete,
  } = categoryDelete;

  const userInfo = useSelector((state: RootState) => state.userInfo);

  const confirmDelete = (id: number) => {
    dispatch(deleteCategory(id));
  };

  const confirmEdit = (id: number) => {
    history.push(`/admin/categories/edit/${id}`);
  };

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      sorter: true,
      key: "name",
    },
    {
      title: "",
      key: "action",
      width: "10%",
      render: (index: any) => (
        <Space size="middle">

          <Button shape="circle" type="link" icon={<Edit2 />} onClick={() => confirmEdit.bind(this)(index.id)} />

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

  useEffect(() => {
    if (userInfo.user.role === "Admin") {
      dispatch(ListCategories());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  return (
    <div>
      <Link to="/admin/categories/create">
        <Button type="primary" style={{ marginBottom: 16 }}>
          {" "}
          Create Category
        </Button>
      </Link>
      <Table columns={columns} dataSource={categories} />
    </div>
  );
};

export default AdminCategories;
