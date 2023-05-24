import { SearchBar } from "./SearchBar";
import { ProductsModal } from "./ProductsModal";

interface SearchBarProps {
  setSearched: (value: string) => void;
}

interface ProductsModalProps {
  numberOfFoundProducts: number;
  productsList: any[];
  searched: string
  setIsModalVisible: (string: boolean) => void;
}

interface Container {
    isModalVisible: boolean

}

export const SearchBarContainer = ({
  setSearched,
  numberOfFoundProducts,
  productsList,
  searched,
  isModalVisible,
  setIsModalVisible,
}: SearchBarProps & ProductsModalProps & Container) => {
  return (
    <div className={"searchBarContainer"} >
      <SearchBar setSearched={setSearched} />
      <ProductsModal
        numberOfFoundProducts={numberOfFoundProducts}
        productsList={productsList}
        path={searched}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

