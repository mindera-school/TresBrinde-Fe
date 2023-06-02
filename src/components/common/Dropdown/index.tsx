import { useState } from "react";
import { ChevronDown } from "react-feather";

const Dropdown = ({
  title,
  placeholder,
  options,
  open,
  clickHandler,
  selectHandler,
  color,
}: any) => {
  const [selectedValue, setSelectedValue] = useState(placeholder);

  return (
    <div>
      <h3 className="dropdown-title">{title}</h3>
      <div
        className={`dropdown-box ${color ? "dropdown-box-color" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          clickHandler(!open);
        }}
      >
        <span>
          {color && selectedValue !== placeholder ? (
            <div
              className="colorDisplayer"
              style={{ backgroundColor: selectedValue.replace(/ /g, "") }}
            ></div>
          ) : null}
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
              {color ? (
                <div
                  className="colorDisplayer"
                  style={{ backgroundColor: e.replace(/ /g, "") }}
                ></div>
              ) : null}
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
