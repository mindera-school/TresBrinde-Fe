import SearchIcon from "../../../../images/search.svg";

interface SearchBarProps {
  setSearched: (value: string) => void;
}

export const SearchBar = ({ setSearched }: SearchBarProps, {searched}: any) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearched(value);
  };

  return (
    <li className="searchbar">
      <label>
        <img alt="Magnifying glass icon" src={SearchIcon} />
        <input
          placeholder="Pesquisar Produtos"
          className="custom-input"
          value={searched}
          onChange={handleInputChange}
        />
      </label>
    </li>
  );
};

