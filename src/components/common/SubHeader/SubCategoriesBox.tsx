const SubCategoriesBox = ({ subcategories, show }: any) => {
  const content = (
    <div className={`subcategories-box${show ? "" : "-hide"}`}>
      {subcategories.map((subcategory: any) => (
        <li>{subcategory.name}</li>
      ))}
    </div>
  );
  return subcategories.length > 0 ? content : null;
};

export default SubCategoriesBox;
