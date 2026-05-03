import React from 'react'
import './TargetValueChange.css'
import { useEffect } from 'react'
import { useState } from 'react'
function TargetValueChange({ TargetValue, setPage }) {
    const [TemplateValues, setTemplateValues] = useState([])
    useEffect(() => {
        const convertToArray = (props) => {
            return Object.keys(props).map((key) => ({
                name: key,
                ...props[key],
            }));
        };

        const array = convertToArray(TargetValue.props)
        if (array) setTemplateValues(array)

    }, [TargetValue])

    const HandleChangeText = (e,i) => {
        const changedValue = e.target.value
        const Keyname = e.target.name
        setPage((prev) => ({
            ...prev,
            sections: prev.sections.map((section,index) =>
                index === TargetValue.index
                    ? {
                        ...section,
                        props: {
                            ...section.props,
                            [Keyname]: {
                                ...section.props[Keyname],
                                value: changedValue,
                            },
                        },
                    }
                    : section
            ),
        }));
        setTemplateValues((prev, index) => {
            const Prevmapelement = prev.map(((elem, index) => {
                if (index == i) {
                    return { ...elem, value: changedValue }
                }
                return elem
            }))
            return Prevmapelement
        })
    }

    return (
        <div className='TargetValueChange'>
            {
                TemplateValues?.map(((elem, i) => {
                    return <div className="ValueBox mb-2">
                        <p>{elem.label}</p>
                        <input type="text" name={elem.name} onChange={(e) => {
                            HandleChangeText(e,i)
                        }} value={elem.value} />
                    </div>
                }))
            }
        </div>
    )
}

export default TargetValueChange