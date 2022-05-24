import React from "react";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../../redux/actions/categoryActions";
import { useHistory } from "react-router-dom";



const CreateCategory = () => {
  useDocumentTitle("Três Brinde | Create Category");
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values: any) => {
  
    dispatch(createCategory(values.category, history));
  };



  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        
      >
        <Form.Item label="Create Category" name="layout"></Form.Item>
        <Form.Item label="Category" name="category">
          <Input placeholder="Name Category" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create Category</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateCategory;
