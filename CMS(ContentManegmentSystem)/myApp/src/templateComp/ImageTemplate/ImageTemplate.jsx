import React from 'react'
// import './ImageTemplate.css'
function ImageTemplate({
    image={value:'https://i.pinimg.com/736x/b2/1d/5c/b21d5c9b2bceeb42b938f30f7151567a.jpg'},
    justifyContent={value:"center"},
    imageWidth={value:""},
    imageHeight={value:"40vh"},
    borderRadius={value:'10px'},
    margin={value:"0px"}
}) {
  return (
    <div className='flex item-center' style={{justifyContent:justifyContent.value,margin:margin.value}} >
        <div className="" >
            <img className='' src={image.value} style={{height:imageHeight.value,width:imageWidth.value||"50%" ,borderRadius:borderRadius.value}} alt="" srcset="" />
        </div>
    </div>
  )
}

export default ImageTemplate