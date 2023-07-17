import { FaFile } from "react-icons/fa";
import { redirect } from "react-router-dom";

type DocumentProps = {
  file: {
    fileTitle: string;
    fileUrl: string;
  };
};

const Document = ({ file }: DocumentProps) => {
  const openInNewTab = () => {
    window.open(file.fileUrl, "_blank", "noreferrer");
  };
  return (
    <div
      className="flex flex-col w-36 max-h-32 m-3 p-3 text-center items-center cursor-pointer bg-gray-50"
      title={file.fileTitle}
      onDoubleClick={openInNewTab}
    >
      <FaFile className="text-6xl"></FaFile>
      <span className="overflow-clip w-full h-6">{file.fileTitle}</span>
    </div>
  );
};

export default Document;
