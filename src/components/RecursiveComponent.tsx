import { useState } from "react";
import { IFile } from "../interfaces";
import BottomArrow from "./SVG/BottomArrow";
import FileIcon from "./SVG/File";
import FolderIcon from "./SVG/Folder";
import RightArrow from "./SVG/RightArrow";

interface IProps {
  fileTree: IFile;
}

function RecursiveComponent({
  fileTree: { name, isFolder, children },
}: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //! Handlers
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="mb-2 ml-4 cursor-pointer">
      <div className="flex items-cente mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isOpen ? <BottomArrow /> : <RightArrow />}

            <FolderIcon />
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center mr-2">
            <FileIcon />
            <span>{name}</span>
          </div>
        )}
      </div>

      {isOpen && children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
}

export default RecursiveComponent;
