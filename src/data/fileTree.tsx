import { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: " .vite",
          isFolder: true,
          children: [
            {
              name: "react.jsx",
              isFolder: false,
            },
            {
              name: "Button.tsx",
              isFolder: false,
            },
            {
              name: "Alert.ts",
              isFolder: false,
            },
          ],
        },
      ],
    },

    {
      name: "index.html",
      isFolder: false,
    },

    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "Components",
          isFolder: true,
          children: [
            {
              name: "Button.tsx",
              isFolder: false,
            },
            {
              name: "Alert.ts",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};
