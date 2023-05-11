import React, { useEffect } from "react";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import { Form, Input, Button, Space, Popconfirm, Table, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsCategory,
  updateCategory,
} from "../../../../redux/actions/categoryActions";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import {  Trash2 } from "react-feather";

const EditCategory = ({ params }: any) => {
  const categoryId = params.id;

  const dispatch = useDispatch();
  const history = useHistory();

  const categoryDetails = useSelector(
    (state: RootState) => state.categoryDetails
  );
  const { category, loading } = categoryDetails;

  useDocumentTitle(`Três Brinde | Edit ${category?.name}`);

  const onFinish = (values: any) => {
    dispatch(updateCategory(categoryId, values.categoryName, history));
  };


  const columnsSubCategories = [
    {
      title: "SubCategory Name",
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
          <Popconfirm title="Tem a certeza？" okText="Sim" cancelText="Não">
            <Button shape="circle" type="link" icon={<Trash2 color="red" />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    if (!category || !category.name || category.id !== categoryId) {
      dispatch(detailsCategory(categoryId));
    }
    // eslint-disable-next-line
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label={`Edit ${category?.name}`}
              name="layout"
            ></Form.Item>
            <Form.Item label="Category" name="categoryName">
              <Input defaultValue={category ? category.name : "erro"} />
            </Form.Item>
            <Form.Item>
            <Table columns={columnsSubCategories} dataSource={category?.subCategories} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Category
              </Button>
              
            </Form.Item>
          </Form>
         
        </>
      )}
    </div>
  );
};

export default EditCategory;
