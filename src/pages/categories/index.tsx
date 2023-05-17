import { List } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubCategoryCard from "../../components/category/subCategoryCard";
import Title from "../../components/common/Title";
import { detailsCategory } from "../../redux/actions/categoryActions";
import { RootState } from "../../redux/store";

const CategoryPage = ({ params }: any) => {
  const categoryId = params.id;

  const dispatch = useDispatch();

  const categoryDetails = useSelector(
    (state: RootState) => state.categoryDetails
  );
  const { category } = categoryDetails;

  useEffect(() => {
    dispatch(detailsCategory(categoryId));
    // eslint-disable-next-line
  }, [dispatch, categoryId]);

  return !category ? (
    <p> Não tem sub categorias</p>
  ) : (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        header={<Title>{category.name}</Title>}
        bordered={false}
        dataSource={category?.subCategories}
        renderItem={(item) => (
          <div style={{ width: "100%" }}>
            <List.Item key={item.id}>
              <SubCategoryCard subCategory={item} />
            </List.Item>
          </div>
        )}
      />
    </div>
  );
};

export default CategoryPage;
