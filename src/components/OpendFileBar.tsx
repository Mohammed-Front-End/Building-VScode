import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import OpendFilesBarTab from "./OpendFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

function OpendFilesBar() {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div>
      <div className="flex items-center border-b-[1px] border-[#fffff1f]">
        {openedFiles.map((file) => (
          <OpendFilesBarTab file={file} key={file.id} />
        ))}
      </div>
      <FileSyntaxHighlighter content={clickedFile.fileContent}/>
    </div>
  );
}

export default OpendFilesBar;
