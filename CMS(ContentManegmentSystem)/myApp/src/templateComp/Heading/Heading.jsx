import React from 'react'

function Heading({
    padding = {value:"10px"},
    height = {value:""},
    alignItems = {value:"end"},
    justifyContent = {value:"start"},
    fontsize = {value:"60px"},
    fontweight = {value:"900"},
    color = {value:"green"},
    content = {value:"Content"},
}) {

    return (
        <div
            className='flex '
            style={{
                padding: padding.value,
                height: height.value,
                alignItems:alignItems.value,
                justifyContent:justifyContent.value
            }}
        >

            <h1
                style={{
                    fontSize: fontsize.value,
                    color: color.value,
                    fontWeight: fontweight.value
                }}
            >
                {content.value}
            </h1>

        </div>
    )
}

export default Heading