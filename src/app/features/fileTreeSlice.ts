import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile { 
  activeTabId: null| string,
  filename: string;
  filecontent: string | undefined;
}

export interface IInitialState { 
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null ,
    filename: '',
    filecontent: '' 
  }
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile:(state, action:PayloadAction <IClickedFile>)=> {
      state.clickedFile = action.payload;
    },
  }
});

export const { setOpenedFiles,setClickedFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
47