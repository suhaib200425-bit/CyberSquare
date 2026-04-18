import React from 'react'
import './IconBox.css'
function IconBox({Icon,Title,Count}) {
    return (
        <div className="col-12 col-md-3 p-2">
            <div className='IconBox'>
                <div className="iconDiv">
                    {Icon}
                </div>
                <h5 className="count m-0 mt-1">{Count}</h5>
                <p className="pera m-0">{Title}</p>
            </div>
        </div>
    )
}

export default IconBox