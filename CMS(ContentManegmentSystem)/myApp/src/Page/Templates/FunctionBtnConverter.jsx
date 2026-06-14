

import React from 'react'

function FunctionBtnConverter({ fn }) {
  return (
    <button onClick={() => {
      let str = fn.toString();

      // function name and outer braces remove
      const match = str.match(/\{([\s\S]*)\}$/);

      match ? console.log(match[1].trim()) : console.log(str);

    }} className="bg-black text-white f-bold text-[20px] p-3">Click</button>
  )
}

export default FunctionBtnConverter