import { Link } from "react-router-dom";

const SubCategory = ({ name, id, setIsMenuOpen }: any) => {
  return (
    <li>
      <Link
        onClick={() => setIsMenuOpen(false)}
        to={`/products?subCategory=${id}`}
      >
        {name}
      </Link>
    </li>
  );
};

export default SubCategory;
