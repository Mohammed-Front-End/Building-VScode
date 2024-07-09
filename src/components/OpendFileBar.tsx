import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import OpendFilesBarTab from "./OpendFilesBarTab";
import DropMenu from "./ui/ContextMenue";
import { useState } from "react";

function OpendFilesBar() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  return (
    <div>
      <div
        className="flex items-center border-b-[1px] border-[#fffff1f]"
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openedFiles.map((file) => (
          <OpendFilesBarTab file={file} key={file.id} />
        ))}
      </div>

      {showMenu && <DropMenu position={menuPosition} setShowMenu={setShowMenu}/>}
    </div>
  );
}

export default OpendFilesBar;
