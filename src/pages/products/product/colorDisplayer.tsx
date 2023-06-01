const ColorDisplayer = ({ color }: any) => {
  console.log(color);
  return (
    <div
      className="colorDisplayer"
      style={{ backgroundColor: color.replace(/ /g, "") }}
    ></div>
  );
};

export default ColorDisplayer;
