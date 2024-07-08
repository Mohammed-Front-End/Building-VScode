import { useState } from "react";
import { IFile } from "../interfaces";
import BottomArrow from "./SVG/BottomArrow";
import RightArrow from "./SVG/RightArrow";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFiles } from "../app/features/fileTreeSlice";
import { RootState } from "../app/Store";
import { doesFileObjectExist } from "../utils";

interface IProps {
  fileTree: IFile;
}

function RecursiveComponent({ fileTree }: IProps) {
  const { id, name, isFolder, children } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  //! Handlers
  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    const exists = doesFileObjectExist(openedFiles, id);
    if (exists) {
      return;
    }
    dispatch(setOpenedFiles([...openedFiles, fileTree]));
    dispatch(setActiveTabID(id));
  };

  return (
    <div className="mb-2 ml-4 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            <span>{isOpen ? <BottomArrow /> : <RightArrow />}</span>
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div onClick={onFileClicked} className="flex items-center ml-2">
            <RenderFileIcon filename={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
}

export default RecursiveComponent;
