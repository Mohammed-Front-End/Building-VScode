import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?:number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel:boolean;
}
function ResizablePanel({defaultLayout = [15, 85],leftPanel , rightPanel,showLeftPanel}: IProps) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup autoSaveId="conditional" direction="horizontal" onLayout={onLayout}>
      {
      showLeftPanel && (
        <>
          <Panel collapsible defaultSize={defaultLayout[0]} >{leftPanel}</Panel>
          <PanelResizeHandle className="border-r border-[#696868cb] w-2" />
        </>
      )}

      <Panel defaultSize={defaultLayout[1]} >
        {rightPanel}
      </Panel>


    </PanelGroup>
  );
}

export default ResizablePanel;
