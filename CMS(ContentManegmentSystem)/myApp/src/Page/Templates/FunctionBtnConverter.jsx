

import React from 'react'

function FunctionBtnConverter({ fn }) {
  return (
    <button onClick={() => {
      
      const fixedCode = fn.toString()
                .replace(/</g, "\\u003C")
                .replace(/>/g, "\\u003E");
      // function name and outer braces remove
      // const match = str.match(/\{([\s\S]*)\}$/);

      // match ? console.log(match[1].trim()) : console.log(str);
      console.log(fixedCode);

    }} className="bg-black text-white f-bold text-[20px] p-3">Click</button>
  )
}

export default FunctionBtnConverter


