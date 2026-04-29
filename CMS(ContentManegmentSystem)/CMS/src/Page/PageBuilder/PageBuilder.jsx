import React, { useEffect, useRef, useState } from 'react'
import './PageBuilder.css'
import { DragDropProvider, useDroppable } from '@dnd-kit/react';
import Navbar from '../../components/NavBar/NavBar'
import { AllTeplates, PAGEAPI, StaticPage, TEMPLATEAPI } from '../../assets/assets';
import DraggableTemplate from '../../components/DraggableTemplate/DraggableTemplate';
import { Input } from 'postcss';
import TemplateValue from '../../components/TemplateValue/TemplateValue';
import axios from 'axios';
import useStore from '../../Context/Zustand';
function PageBuilder() {
    const [PageSections, setPageSections] = useState({})
    const [Templates, setTemplates] = useState({})
    const [Allpages, setAllpages] = useState([])
    const mainRef = useRef()
    const [target, setTarget] = useState(null)
    const { ref } = useDroppable({});
    const { BuilderPage, SetBuilderPage } = useStore()
    useEffect(() => {
        const getpagesname = async () => {
            try {
                const response = await axios.get(`${PAGEAPI}/builder`)
                setAllpages(response.data.data)

                if (!BuilderPage) {
                    SetBuilderPage(response.data.data[0].title)
                }
                return 1
            } catch (error) {
                console.log(error.reponse?.data, error.message);
                return 0
            }
        } 
        const gettemplates = async () => {
            try {
                const response = await axios.get(TEMPLATEAPI)
                setTemplates(response.data)

                if (!BuilderPage) {
                    SetBuilderPage(response.data.data[0].title)
                }
                return 1
            } catch (error) {
                console.log(error.reponse?.data, error.message);
                return 0
            }
        }

        [gettemplates(),getpagesname()]
        
    }, [])
    useEffect(() => {
        const getpage = async () => {
            try {
                const response = await axios.get(`${PAGEAPI}/title/${BuilderPage}`)
                setPageSections(response.data.data)
                console.log(response.data.data)

            } catch (error) {
                console.log(error.reponse?.data, error.message);
            }
        }

        if (BuilderPage) {
            getpage()
        }
        console.log('BuilderPage');
        console.log(BuilderPage);
    }, [BuilderPage])

    function renderTemplate(html, values) {
        let output = html;

        for (let key in values) {
            const regex = new RegExp(`{{${key}}}`, "g");
            output = output.replace(regex, values[key].value);
        }

        return output;
    }

    function ObjectValueChangeArray(valuesObj) {
        const valuesArray = Object.entries(valuesObj).map(([key, val]) => ({
            key,
            ...val
        }));

        console.log(valuesArray);
        return valuesArray
    }

    const handleSavepage = async (e) => {
        console.log(PageSections);
        try {
            const response = await axios.patch(`${PAGEAPI}/${PageSections._id}`, { sections: PageSections.sections })
            console.log(response.data);

        } catch (error) {
            console.log(error.response.data || error.message);

        }
    }


    return (
        <div className='PageBuilder'>
            <Navbar />
            <div className="Content">
                <DragDropProvider
                    onDragEnd={(event) => {
                        console.log(event);
                        if (event.canceled) return;
                        const { target, source } = event.operation;

                        console.log("ID:", source.id);
                        console.log("DATA:", source.data);

                        const exactcode = renderTemplate(source.data.template, source.data.values)
                        setPageSections(prev => {
                            console.log(prev);

                            if (!prev?.sections) return { ...prev, sections: [source.data] }
                            return { ...prev, sections: [...prev.sections, source.data] }
                        })
                        // setPageSections(prev => {
                        //     console.log('prev object');
                        //     console.log([...prev, exactcode]);

                        //     return [...prev, exactcode]
                        // })
                        // console.log(source.element.clientHeight);
                        mainRef.current.scrollTop = mainRef.current.scrollHeight + source.element.clientHeight;


                    }}
                >
                    <div className="TemplateColumn" >
                        {
                            Templates?.data?.map(elem => <DraggableTemplate TemplateObject={elem} />)
                        }
                    </div>

                    <div class="MainPage " ref={mainRef}>
                        <div className="flex w-full  justify-between px-4 pt-3">
                            {
                                Allpages && <select class="h-max border rounded px-4 py-2 w-max" value={BuilderPage} onChange={(event) => {
                                    SetBuilderPage(event.target.value)
                                    setPageSections({})
                                }}>

                                    {

                                        Allpages.map(elem => (
                                            <option value={elem.title}>{elem.title}</option>
                                        ))

                                    }

                                </select>
                            }

                            <button class="h-max bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSavepage}>
                                Save
                            </button>
                        </div>
                        <div className="Sections mt-5 w-full" ref={ref} >
                            {
                                PageSections && PageSections?.sections?.map((elem, i) =>
                                (
                                    <div className="PagesColumn" onClick={() => {
                                        setTarget(prev => {
                                            if (prev?.index == i) return null
                                            console.log({index: i });
                                            
                                            return { ...elem, index: i }
                                        })
                                    }} dangerouslySetInnerHTML={{ __html: renderTemplate(elem.template, elem.values) }}>
                                    </div>
                                ))

                            }
                        </div>
                    </div>


                    <div
                        onClick={() => {
                            console.log(PageSections);

                        }}
                        className={`TemplateVluesChange p-[10px] overflow-y-auto transition-all duration-[400ms] ${target == null ? 'w-[0px]' : 'w-[400px]'
                            }`}
                    >
                        {

                            target !== null && ObjectValueChangeArray(target?.values).map((elem, i) => (
                                <TemplateValue type={elem.type} value={elem.value} label={elem.label} target={target} key={i} refKey={elem.key} setPageSections={setPageSections} />
                            ))
                        }
                    </div>
                </DragDropProvider>


            </div >
        </div >
    )
}

export default PageBuilder