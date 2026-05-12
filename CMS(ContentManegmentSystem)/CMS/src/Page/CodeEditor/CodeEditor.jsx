import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
    const [code, setCode] = useState(`
function App() {
  return (
    <div>
      <h1>Hello React 🚀</h1>
      <p>Live Preview Working</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
`);

    const srcDoc = `
  <html>
    <head>
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="https://cdn.tailwindcss.com"></script>
      <style>
      *{
        margin:0
        paddding:0
      }
        body{
          font-family:sans-serif;
          padding:20px;
        }
      </style>
    </head>

    <body>
      <div id="root"></div>

      <script type="text/babel">
        ${code}
      </script>
    </body>
  </html>
  `;

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                height: "100vh",
                width: "100%"
            }}
        >
            <Editor
                height="100%"
                defaultLanguage="javascript"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value)}
                options={{
                    fontSize: 16,
                    minimap: { enabled: false },
                    automaticLayout: true
                }}
            />

            <iframe
                srcDoc={srcDoc}
                title="preview"
                sandbox="allow-scripts"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    background: "#fff"
                }}
            />
        </div>
    );
}