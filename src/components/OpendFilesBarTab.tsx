import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import { setClickedFile } from "../app/features/fileTreeSlice";
import CloseIcon from "./SVG/CloseIcon";
import { RootState } from "@reduxjs/toolkit/query";

interface IProps {
  file: IFile;
}
function OpendFilesBarTab({ file }: IProps) {
  const dispatch = useDispatch();
  const { name, content } = file;
  const onClick = () => {
    dispatch(setClickedFile({ filename: name, fileContent: content }));
  };

  const { activeTabId } = useSelector((state: RootState) => state.tree);
  return (
    <div
      onClick={onClick}
      className="border-2 border-red-400 p-2 flex items-center"
      style={{ border: file.id === activeTabId ? "1px solid red" : "" }}
    >
      <RenderFileIcon filename={file.name} />
      <span
        className="cursor-pointer hover:bg-[#64646473] 
      duration-300 w-fit mx-2 p-1 rounded-md flex justify-center items-center"
      >
        {file.name}
      </span>

      <span
        className="cursor-pointer hover:bg-[#64646473] 
      duration-300 w-fit mx-2 p-1 rounded-md flex justify-center items-center"
      >
        <CloseIcon />
      </span>
    </div>
  );
}

export default OpendFilesBarTab;
