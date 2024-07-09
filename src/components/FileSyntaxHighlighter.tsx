import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  content: string;
}
function FileSyntaxHighlighter({ content }: IProps) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      showLineNumbers
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overFlowX: "auto",
        fontSize: "1.5rem",
      }}
    >
      {String(content)}
    </SyntaxHighlighter>
  );
}

export default FileSyntaxHighlighter;
