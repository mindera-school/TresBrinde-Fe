import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import { MinusCircle, PlusCircle } from "react-feather";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import { CreateProductAction } from "../../../../redux/actions/productActions";

const { Option } = Select;

const CreateProdct = () => {
  useDocumentTitle("Três Brinde | Produtos");
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values: any) => {
    const priceQuantities = values.priceQuantities.map((p: any) => {
      const properties = {
        quantity: p.quantity,
        unitPrice: p.quantity,
      };

      return properties;
    });

    const productProperties = values.productProperties.map((p: any) => {
      const properties = {
        property: p.property,
        value: p.value,
      };

      return properties;
    });

    const data = {
      reference: values.referenceProduct,
      catalogReference: values.catalogReference,
      productName: values.productName,
      description: values.description,
      keywords: values.keywords,
      mainImage: values.mainImage,
      brand: values.brand,
      price: values.price,
      material: values.material,
      minimumQuantity: values.minimumQuantity,
      subCategories: [1],
      priceQuantities: priceQuantities,
      productProperties: productProperties,
    };

    dispatch(CreateProductAction(data, history));
  };

  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Create Product" name="layout"></Form.Item>
        <Form.Item label="referenceProduct" name="referenceProduct">
          <Input />
        </Form.Item>
        <Form.Item label="catalogReference" name="catalogReference">
          <Input />
        </Form.Item>
        <Form.Item label="productName" name="productName">
          <Input />
        </Form.Item>
        <Form.Item label="description" name="description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="keywords" name="keywords">
          <Input />
        </Form.Item>
        <Form.Item label="brand" name="brand">
          <Input />
        </Form.Item>
        <Form.Item label="material" name="material">
          <Input />
        </Form.Item>
        <Form.Item label="price" name="price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="minimumQuantity" name="minimumQuantity">
          <InputNumber />
        </Form.Item>
        <Form.Item label="subCategories" name="subCategories">
          <Select
            placeholder="Sub Categories"
            //onChange={this.onGenderChange}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="priceQuantities">
          <Form.List name="priceQuantities">
            {(fields: any, { add, remove }: any) => (
              <>
                {fields.map(({ key, name, fieldKey }: any) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 4 }}
                    align="baseline"
                  >
                    <Form.Item
                      // {...restField}
                      name={[name, "quantity"]}
                      fieldKey={[fieldKey, "quantity"]}
                    >
                      <InputNumber />
                    </Form.Item>
                    <Form.Item
                      //{...restField}
                      name={[name, "unitPrice"]}
                      fieldKey={[fieldKey, "unitPrice"]}
                    >
                      <InputNumber />
                    </Form.Item>
                    <MinusCircle onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusCircle />}
                  >
                    adicionar quantidade e preço
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
        <Form.Item label="productProperties">
          <Form.List name="productProperties">
            {(fields: any, { add, remove }: any) => (
              <>
                {fields.map(({ key, name, fieldKey }: any) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 4 }}
                    align="baseline"
                  >
                    <Form.Item
                      name={[name, "property"]}
                      fieldKey={[fieldKey, "property"]}
                    >
                      <Input placeholder="Property" />
                    </Form.Item>
                    <Form.Item
                      name={[name, "value"]}
                      fieldKey={[fieldKey, "value"]}
                    >
                      <Input placeholder="Value" />
                    </Form.Item>
                    <MinusCircle onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusCircle />}
                  >
                    adicionar propiedade e valor
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Product
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProdct;
