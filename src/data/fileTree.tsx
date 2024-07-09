import { IFile } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const fileTree: IFile = {
  id: uuidv4(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuidv4(),

      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: " .vite",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "react.jsx",
              isFolder: false,
              content: `
import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import { setActiveTabId, setClickedFile } from "../app/features/fileTreeSlice";
import CloseIcon from "./SVG/CloseIcon";
import { RootState } from "@reduxjs/toolkit/query";

interface IProps {
  file: IFile;
}
function OpendFilesBarTab({ file }: IProps) {
  const dispatch = useDispatch();
  const { id, name, content } = file;
  const { activeTabId } = useSelector((state: RootState) => state.tree);

  // Handlers
  const onClick = () => {
    dispatch(setClickedFile({ filename: name, fileContent: content }));
    dispatch(setActiveTabId(id));
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
      >
        <CloseIcon />
      </span>
    </div>
  );
}

export default OpendFilesBarTab;

              `,
            },
            {
              id: uuidv4(),
              name: "Button.tsx",
              isFolder: false,
              content: `
              import { useDispatch, useSelector } from "react-redux";
              import { IFile } from "../interfaces";
              import RenderFileIcon from "./RenderFileIcon";
              import { setActiveTabId, setClickedFile } from "../app/features/fileTreeSlice";
              import CloseIcon from "./SVG/CloseIcon";
              import { RootState } from "@reduxjs/toolkit/query";
              
              interface IProps {
                file: IFile;
              }
              function OpendFilesBarTab({ file }: IProps) {
                const dispatch = useDispatch();
                const { id, name, content } = file;
                const { activeTabId } = useSelector((state: RootState) => state.tree);
              
                // Handlers
                const onClick = () => {
                  dispatch(setClickedFile({ filename: name, fileContent: content }));
                  dispatch(setActiveTabId(id));
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
                    >
                      <CloseIcon />
                    </span>
                  </div>
                );
              }
              
              export default OpendFilesBarTab;
              
                            `,
            },
            {
              id: uuidv4(),
              name: "Alert.ts",
              isFolder: false,
            },
          ],
        },
      ],
    },

    {
      id: uuidv4(),

      name: "index.html",
      isFolder: false,
    },

    {
      id: uuidv4(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuidv4(),

          name: "Components",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "Button.tsx",
              isFolder: false,
            },
            {
              id: uuidv4(),
              name: "Alert.ts",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};
