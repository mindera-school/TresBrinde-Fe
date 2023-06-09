const ColorDisplayer = ({ color }: any) => {
  return (
    <div
      className="colorDisplayer"
      style={{ backgroundColor: color.replace(/ /g, "") }}
    ></div>
  );
};

export default ColorDisplayer;
