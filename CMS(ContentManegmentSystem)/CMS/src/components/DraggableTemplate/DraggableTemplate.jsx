import React, { useEffect, useState } from 'react'
import { useDraggable } from '@dnd-kit/react';
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';


function DraggableTemplate({ TemplateObject }) {

    const [Template, setTemplate] = useState(null)

    const { ref } = useDraggable({
        id: TemplateObject._id,   // MUST
        data: TemplateObject
    });

    useEffect(()=>{
        console.log('DraggableTemplate');
        console.log({
        id: TemplateObject._id,  
        data: TemplateObject
    });
        
    },[])

    return (
        <div className='w-full ' ref={ref} key={TemplateObject._id} onClick={()=>{
            console.log(TemplateObject);
        }}>
            {
                <DynamicRenderer key={TemplateObject._id} code={TemplateObject.template}  props={TemplateObject?.props} />
            }
        </div>
    )
}

export default DraggableTemplate