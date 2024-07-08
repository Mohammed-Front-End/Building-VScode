import "./App.css";
import OpendFilesBar from "./components/OpendFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div>
      <div className="flex  h-screen">
        <div className="w-64 border-r border-white p-2 border-b-[1px] border-[#ffffff1f]">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpendFilesBar />
      </div>
    </div>
  );
}

export default App;
