import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import OpendFilesBarTab from "./OpendFilesBarTab";

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
      {clickedFile.fileContent}
    </div>
  );
}

export default OpendFilesBar;
