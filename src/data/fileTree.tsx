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
            },
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
