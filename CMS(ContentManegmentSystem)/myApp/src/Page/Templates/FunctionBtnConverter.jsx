

import React from 'react'

function FunctionBtnConverter({ fn }) {
  return (
    <button onClick={() => {
      console.log(fn);
      
      const source = fn
  .toString()
      const result = String(source)
      console.log(result);
      

    }} className="bg-black text-white f-bold text-[20px] p-3">Click</button>
  )
}

export default FunctionBtnConverter


