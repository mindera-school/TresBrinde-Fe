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

interface Container {
    isModalVisible: boolean

}

export const SearchBarContainer = ({
  setSearched,
  numberOfFoundProducts,
  productsList,
  searched,
  isModalVisible
}: SearchBarProps & ProductsModalProps & Container) => {
  return (
    <div className={"searchBarContainer"} >
      <SearchBar setSearched={setSearched} />
      <ProductsModal
        numberOfFoundProducts={numberOfFoundProducts}
        productsList={productsList}
        path={searched}
        isModalVisible={isModalVisible}
      />
    </div>
  );
};

