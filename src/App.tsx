import "./App.css";
import OpendFilesBar from "./components/OpendFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div>
      <div className="flex  h-screen">
        <ResizablePanel
          leftPanel={
            <div className="w-64  p-2 ">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={<OpendFilesBar />}
        />
      </div>
    </div>
  );
}

export default App;
