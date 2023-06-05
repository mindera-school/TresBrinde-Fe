import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { useEffect, useState } from "react";

const Dashboard = () => {
  useDocumentTitle("Três Brinde | Admin Panel");
  const [file, setFile] = useState();

  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(file);
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="file">Choose file to upload</label>
          <br />
          <input
            type="file"
            id="file"
            name="file"
            accept=".csv"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
