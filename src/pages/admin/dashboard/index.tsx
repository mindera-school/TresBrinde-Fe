import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/constants";
import { handleResponse } from "../../../services/api";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload, Switch } from "antd";

const Dashboard = () => {
  const { Dragger } = Upload;
  useDocumentTitle("Três Brinde | Admin Panel");
  const [backUp, setBackUp] = useState<boolean>(true);

  const handleDownload = async () => {
    const requestOptions: any = {
      method: "GET",
    };
    const downloadFile = await fetch(
      `${API_URL}/file/download`,
      requestOptions
    ).then(handleResponse);
    if (downloadFile) {
      const downloadLink = document.createElement("a");
      const fileURL = URL.createObjectURL(downloadFile);
      downloadLink.href = fileURL;
      downloadLink.download = downloadFile.name || "file.csv";
      downloadLink.click();
    }
  };

  const props: UploadProps = {
    name: "file",
    action: `${API_URL}/file/upload`,
    accept: ".csv",
    maxCount: 1,
    beforeUpload:  () => {
      if (backUp) {
         handleDownload();
        setBackUp(false);
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} uploaded com sucesso.`);
      } else if (status === "error") {
        message.error(`${info.file.name} erro a dar upload.`);
      }
    },
  };

  const btnSwitch = () => {
    backUp ? setBackUp(false) : setBackUp(true);
  };

  return (
    <div className="dashboard">
      <div className="downloadContainer">
        <div>
          <span>Fazer backup atraves de download?</span>
          <Switch defaultChecked onChange={btnSwitch} />
        </div>
        <button
          className="downloadButton button button-large"
          onClick={handleDownload}
        >
          Download do catalogo atual
        </button>
      </div>
      <div className="uploadContainer">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Clique ou arraste ficheiro para dar upload
          </p>
          <p className="ant-upload-hint">Suporta apenas ficheiro .csv</p>
        </Dragger>
      </div>
    </div>
  );
};

export default Dashboard;
