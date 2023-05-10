import { Button, Form, Input, InputNumber, Space, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { MinusCircle, PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import { DetailsProductAction } from "../../../../redux/actions/productActions";
import TableWFilter from "../../../../components/common/TableWFilter";

const UpdateProduct = ({ params }: any) => {
  const productId = params.id;
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [selectedSubCategories, setSelectedSubCategories] = useState("");

  const productDetails = useSelector(
    (state: RootState) => state.productDetails
  );
  const { product, loading } = productDetails;

  useDocumentTitle(`Três Brinde | Edit ${product?.productName}`);

  const onFinish = (values: any) => {
    /*
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
      subCategories: selectedSubCategories,
      priceQuantities: priceQuantities,
      productProperties: productProperties,
    };*/

    //dispatch(UpdateProductAction(data, history));
  };

  useEffect(() => {
    if (!product || product.id !== productId) {
      dispatch(DetailsProductAction(productId));
    }
      // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Edit Product" name="layout"></Form.Item>
          <Form.Item label="referenceProduct" name="referenceProduct">
            <Input defaultValue={product ? product.reference : "erro"} />
          </Form.Item>
          <Form.Item label="catalogReference" name="catalogReference">
            <Input defaultValue={product ? product.catalogReference : "erro"} />
          </Form.Item>
          <Form.Item label="productName" name="productName">
            <Input defaultValue={product ? product.productName : "erro"} />
          </Form.Item>
          <Form.Item label="description" name="description">
            <Input.TextArea
              defaultValue={product ? product.description : "erro"}
            />
          </Form.Item>
          <Form.Item label="keywords" name="keywords">
            <Input defaultValue={product ? product.keywords : "erro"} />
          </Form.Item>
          <Form.Item label="brand" name="brand">
            <Input defaultValue={product ? product.brand : "erro"} />
          </Form.Item>
          <Form.Item label="material" name="material">
            <Input defaultValue={product ? product.material : "erro"} />
          </Form.Item>
          <Form.Item label="price" name="price">
            <InputNumber defaultValue={product ? product.price : "erro"} />
          </Form.Item>
          <Form.Item label="minimumQuantity" name="minimumQuantity">
            <InputNumber
              defaultValue={product ? product.minimumQuantity : "erro"}
            />
          </Form.Item>
          <Form.Item label="subCategories" name="subCategories">
            <TableWFilter
              data={[{ key: 1, name: "exemplo" }]}
              columns={["name"]}
              setSubCategories={setSelectedSubCategories}
              selected={[]}
            ></TableWFilter>
          </Form.Item>
          <Form.Item label="priceQuantities">
            <Form.List
              initialValue={product?.priceQuantity}
              name="priceQuantities"
            >
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
            <Form.List
              initialValue={product?.productProperty}
              name="productProperties"
            >
              {(fields: any, { add, remove }: any) => (
                <>
                  {fields.map(({ key, name, fieldKey }: any) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 4 }}
                      align="baseline"
                    >
                      <Form.Item
                        name={[name, "name"]}
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
              Update Product
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default UpdateProduct;
