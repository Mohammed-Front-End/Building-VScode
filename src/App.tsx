import { useSelector } from "react-redux";
import "./App.css";
import Prevew from "./components/Prevew";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import { RootState } from "@reduxjs/toolkit/query";
import Vscode from "./components/SVG/Vscode";


function App() {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);

  return (
    <div>
      <div className="flex  h-screen">
        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64  p-2 ">
              <RecursiveComponent fileTree={fileTree} />
              
            </div>
          }
          rightPanel={openedFiles.length ? <Prevew /> : <Vscode />}
        />
      </div>
    </div>
  );
}

export default App;
