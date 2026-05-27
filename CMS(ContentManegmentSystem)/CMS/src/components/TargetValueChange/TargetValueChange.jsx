import React from 'react'
import './TargetValueChange.css'
import { useEffect } from 'react'
import { useState } from 'react'
function TargetValueChange({ TargetValue, setPage, onChangeFunction }) {
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

    const HandleChangeText = (changedValue, Keyname, i) => {

        if (setPage) {
            setPage((prev) => ({
                ...prev,
                sections: prev.sections.map((section, index) =>
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
        } else {
            onChangeFunction(Keyname, changedValue)
        }

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
                TemplateValues?.map(((elem, index) => {
                    return <div className="ValueBox mb-2">

                        {
                            elem.type == "text" && <div className=''>
                                <p>{elem.label}</p>
                                <input type="text" className='textinput' name={elem.name} onChange={(e) => {

                                    const changedValue = e.target.value
                                    const Keyname = e.target.name
                                    HandleChangeText(changedValue, Keyname, index)

                                }} value={elem.value} />
                            </div>
                        }
                        {
                            elem.type == "color" && <div className='flex items-center gap-3'>
                                <p>{elem.label}</p>
                                <input type="color" className='colorinput' name={elem.name} onChange={(e) => {
                                        console.log(e.target.value);
                                        
                                    const changedValue = e.target.value
                                    const Keyname = e.target.name
                                    HandleChangeText(changedValue, Keyname, index)
                                }} value={elem.value} />
                            </div>
                        }{
                            elem.type == "image" && <div className=''>
                                <p>{elem.label}</p>
                                <img src={elem.value} width={"100%"} alt="EMPTY" />
                                <input type="text" className='textinput' name={elem.name} onChange={(e) => {
                                        console.log(e.target.value);
                                        
                                    const changedValue = e.target.value
                                    const Keyname = e.target.name
                                    HandleChangeText(changedValue, Keyname, index)
                                }} value={elem.value} />
                            </div>
                                // : <p>{elem.type} = color text image</p>
                        }
                        {
                            elem.type != "image" &&
                            elem.type != "text" &&
                            elem.type != "color" && <div className=''>
                                <p>{elem.label}</p>
                                <input type="text" className='textinput' name={elem.name} onChange={(e) => {
                                        console.log(e.target.value);
                                        
                                    const changedValue = e.target.value
                                    const Keyname = e.target.name
                                    HandleChangeText(changedValue, Keyname, index)
                                }} value={elem.value} />
                            </div>
                                // : <p>{elem.type} = color text image</p>
                        }

                    </div>
                }))
            }
        </div>
    )
}

export default TargetValueChange