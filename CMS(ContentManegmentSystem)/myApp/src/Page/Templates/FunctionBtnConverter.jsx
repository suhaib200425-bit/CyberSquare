

import React from 'react'

function FunctionBtnConverter({fn}) {
  return (
     <button onClick={() => {

        const data = JSON.stringify(fn.toString())
        
        console.log(data);


    }} className="bg-black text-white f-bold text-[20px] p-3">Click</button>
  )
}

export default FunctionBtnConverter