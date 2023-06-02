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
          name={category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          subCategories={category.subCategories}
        />
      ))}
    </div>
  );
};

export default SubHeader;
