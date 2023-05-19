import { SearchBar } from "./SearchBar";
import { ProductsModal } from "./ProductsModal";

interface SearchBarProps {
  setSearched: (value: string) => void;
}

interface ProductsModalProps {
  numberOfFoundProducts: number;
  productsList: any[];
  searched: string
}

export const SearchBarContainer = ({
  setSearched,
  numberOfFoundProducts,
  productsList,
  searched
}: SearchBarProps & ProductsModalProps) => {
  return (
    <div className="searchBarContainer">
      <SearchBar setSearched={setSearched} />
      <ProductsModal
        numberOfFoundProducts={numberOfFoundProducts}
        productsList={productsList}
        path={searched}
      />
    </div>
  );
};

