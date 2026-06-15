

import React from 'react'
import * as Babel from "@babel/standalone";

function FunctionBtnConverter({ fn }) {
  function getFunctionName(code) {

    // function Test() {}
    const functionMatch = code.match(
        /function\s+([A-Za-z0-9_]+)/
    );

    if (functionMatch) {
        return functionMatch[1];
    }

    // const Test = () => {}
    const arrowMatch = code.match(
        /const\s+([A-Za-z0-9_]+)\s*=\s*\(/
    );

    if (arrowMatch) {
        return arrowMatch[1];
    }

    return null;
}

  return (
    <button onClick={() => {

      const source = fn.toString()
      const componentName = getFunctionName(source);

            if (!componentName) {
                throw new Error("Component name not found");
            }

            const fixedCode = source
                .replace(/\\u003C/g, "<")
                .replace(/\\u003E/g, ">");
            console.log(fixedCode);

      const compiled = Babel.transform(source, {
        presets: [
          ["react", { runtime: "classic" }]
        ],
        envName: "production"
      }).source;

console.log(compiled);

    }} className="bg-black text-white f-bold text-[20px] p-3">Click</button>
  )
}

export default FunctionBtnConverter


