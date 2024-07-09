import { useEffect, useRef } from "react";
import { setOpenedFiles } from "../../app/features/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

interface IProps {
  setShowMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}
function DropMenu({ position: { x, y }, setShowMenu }: IProps) {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  const { openedFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.tree
  );

  // Handlers
  const onClose = () => {
    const fileterd = openedFiles.filter((file) => file.id !== tabIdToRemove);
    dispatch(setOpenedFiles(fileterd));
    setShowMenu(false);
  };

  const onCloseAll = () => {
    dispatch(setOpenedFiles([]));
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickedOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickedOutside);

    return () => {
      window.removeEventListener("click", handleClickedOutside);
    };
  }, [setShowMenu]);

  return (
    <div ref={menuRef}>
      <ul
        aria-labelledby="menu-button"
        aria-orientation="vertical"
        role="menu"
        style={{ position: "absolute", left: x, top: y }}
        className="z-10 w-32 origin-top-right divide-y divide-gray-100 rounded-md
        cursor-pointer bg-white text-black  
        px-5 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
      >
        <li onClick={onClose}>Close </li>
        <li onClick={onCloseAll}>Close All </li>
      </ul>
    </div>
  );
}

export default DropMenu;
