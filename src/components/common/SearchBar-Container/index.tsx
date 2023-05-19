import { SearchBar } from "./SearchBar";
import { ProductsModal } from "./ProductsModal";

interface SearchBarProps {
    setSearched: (value: string) => void;
    numberOfFoundProducts: number; 
  }
  

  export const SearchBarContainer = ({ setSearched, numberOfFoundProducts }: SearchBarProps) => {
    return (
      <div className="searchBarContainer">
        <SearchBar setSearched={setSearched} />
        <ProductsModal numberOfFoundProducts={numberOfFoundProducts} />
      </div>
    );
  };
