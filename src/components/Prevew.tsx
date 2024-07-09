import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpendFilesBar from "./OpendFileBar";
import { RootState } from "@reduxjs/toolkit/query";

function Prevew() {
  const {
    clickedFile: { fileContent },
  } = useSelector(({ tree }: RootState) => tree);

  
  return (
    <>
      <OpendFilesBar />
      <FileSyntaxHighlighter content={fileContent} />
    </>
  );
}

export default Prevew;
