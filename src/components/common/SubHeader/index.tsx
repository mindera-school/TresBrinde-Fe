import { useSelector } from "react-redux";
import SubheaderCategory from "./SubheaderCategory";

const SubHeader = () => {
  const categories = useSelector((state: any) => state.categoryList.categories);

  return (
    <div className="subheader">
      {categories?.map((category: any) => (
        <SubheaderCategory
          key={category.id}
          id={category.id}
          name={category.name}
          subCategories={category.subCategories}
        />
      ))}
    </div>
  );
};

export default SubHeader;
