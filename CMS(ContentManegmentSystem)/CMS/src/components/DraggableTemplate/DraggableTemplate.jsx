import React, { useEffect, useState } from 'react'
import { useDraggable } from '@dnd-kit/react';


function DraggableTemplate({ TemplateObject }) {

    const [Template, setTemplate] = useState(null)

    const { ref } = useDraggable({
        id: TemplateObject.name,   // MUST
        data: TemplateObject
        

    });

    function renderTemplate(html, values) {
        let output = html;

        for (let key in values) {
            const regex = new RegExp(`{{${key}}}`, "g");
            output = output.replace(regex, values[key].value);
        }

        return output;
    }

    useEffect(() => {
        const ParseCode = renderTemplate(TemplateObject.template, TemplateObject.values)
        setTemplate(ParseCode)

    }, [])

    return (
        <div ref={ref} >
            {
                Template ?
                    <div
                        dangerouslySetInnerHTML={{ __html: Template }}
                    >
                    </div> : <h2>Error</h2>
            }
        </div>
    )
}

export default DraggableTemplate