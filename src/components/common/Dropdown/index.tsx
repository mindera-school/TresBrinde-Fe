import { useState } from "react";
import { ChevronDown } from "react-feather";

const Dropdown = ({
  title,
  placeholder,
  options,
  open,
  clickHandler,
  selectHandler,
}: any) => {
  const [selectedValue, setSelectedValue] = useState(placeholder);

  return (
    <div>
      <h3 className="dropdown-title">{title}</h3>
      <div
        className="dropdown-box"
        onClick={(e) => {
          e.stopPropagation();
          clickHandler(!open);
        }}
      >
        <span>
          {selectedValue}
          <button>
            <ChevronDown size={20} />
          </button>
        </span>
        <ul className={`options${open ? "-show" : "-hide"}`}>
          {options?.map((e: any) => (
            <li
              onClick={() => {
                setSelectedValue(e);
                selectHandler(e);
              }}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;