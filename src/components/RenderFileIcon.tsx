import { extensionIconPathes } from "../constant";
import IconImg from "./IconImag";
import FileIcon from "./SVG/File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

function RenderFileIcon({ filename, isFolder, isOpen }: IProps) {
  const extension = filename.split(".").pop();
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPathes, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPathes[extension]}_open.svg`
        : `${extensionIconPathes[extension]}.svg`
      : `${extensionIconPathes[extension]}.svg`;
    return <IconImg src={iconPath} />;
  }

  if (isFolder) {
    return isOpen ? (
      <IconImg src="../assets/folder_open.svg" />
    ) : (
      <IconImg src="../assets/folder.svg" />
    );
  }
  return <FileIcon />;
}

export default RenderFileIcon;
