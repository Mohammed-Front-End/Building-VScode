import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import CloseIcon from "./SVG/CloseIcon";
import { RootState } from "@reduxjs/toolkit/query";

interface IProps {
  file: IFile;
}
function OpendFilesBarTab({ file }: IProps) {
  const dispatch = useDispatch();
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);

  // Handlers
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFile({ filename: name, fileContent: content, activeTabId: id })
    );
  };

  const onRemove = (selectedId: string) => {
    const fileterd = openedFiles.filter((file) => file.id !== selectedId);
    const lastTap = fileterd[fileterd.length - 1];
    if (!lastTap) {
      dispatch(setOpenedFiles([]));
      dispatch(
        setClickedFile({
          activeTabId: null,
          filecontent: "",
          filename: "",
        })
      );
      return;
    }
    const { id, content, name } = lastTap;
    dispatch(setOpenedFiles(fileterd));
    dispatch(
      setClickedFile({
        activeTabId: id,
        filecontent: content,
        filename: name,
      })
    );
  };

  return (
    <div
      onClick={onClick}
      className="  p-2 flex items-center"
      style={{
        borderTop:
          file.id === activeTabId
            ? "2px solid #cf6ccf"
            : "2px solid transparent",
      }}
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
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
}

export default OpendFilesBarTab;
