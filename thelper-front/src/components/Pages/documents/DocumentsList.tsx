import Document from "./Document";

const Documents = () => {
  let mockUrl: string = "https://google.com";
  const files = [
    { fileTitle: "MyFile", fileUrl: mockUrl },
    {
      fileTitle: "MyFile Long Name very very sfasfasfasfasf asfasfasfasfa",
      fileUrl: mockUrl,
    },
    { fileTitle: "MyFile1", fileUrl: mockUrl },
    { fileTitle: "MyFile", fileUrl: mockUrl },
    { fileTitle: "MyFile", fileUrl: mockUrl },
    { fileTitle: "MyFile", fileUrl: mockUrl },
    { fileTitle: "MyFile Long Second name lorem", fileUrl: mockUrl },
    { fileTitle: "MyFile Long Second name lorem", fileUrl: mockUrl },
    { fileTitle: "MyFile Long Second name lorem", fileUrl: mockUrl },
    { fileTitle: "MyFile Long Second name lorem", fileUrl: mockUrl },
    { fileTitle: "MyFile Long Second name lorem", fileUrl: mockUrl },
    { fileTitle: "MyFile Long Second name lorem", fileUrl: mockUrl },
    { fileTitle: "MyFile Long Second name lorem", fileUrl: mockUrl },
  ];
  return (
    <div>
      <h1 className="text-left text-3xl mb-10">Documents</h1>
      <div className="flex flex-wrap border-2">
        {files.map((file, index) => {
          return <Document key={index} file={file}></Document>;
        })}
      </div>
    </div>
  );
};

export default Documents;
