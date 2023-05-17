import { Link } from "react-router-dom";

const SubCategory = ({ name, id }: any) => {
  return (
    <li>
      <Link to={`/products?subCategory=${id}`}>{name}</Link>
    </li>
  );
};

export default SubCategory;
