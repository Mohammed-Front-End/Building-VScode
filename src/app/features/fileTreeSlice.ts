import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile { 
  filename: string;
  filecontent: string | undefined;
}

export interface IInitialState { 
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  activeTabID: null| string,
}

const initialState: IInitialState = {
  activeTabID: null ,
  openedFiles: [],
  clickedFile: {
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
    setActiveTabID:(state, action:PayloadAction <string>)=> {
      state.activeTabID = action.payload;
    }

  }
});

export const { setOpenedFiles,setClickedFile,setActiveTabID } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
47