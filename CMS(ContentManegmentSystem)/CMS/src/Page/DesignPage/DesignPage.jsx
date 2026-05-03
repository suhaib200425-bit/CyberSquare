import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios"
// import * as Babel from "@babel/standalone";
// import NavBarOne from '../../../../myApp/src/templateComp/NavBarOne';
// import { DynamicRenderer } from './StringReder';
import './DesignPage.css'
import { AllTeplates, PAGEAPI, ReactAllTemplate, ReactStaticPage, REACTTEPLATEAPI, StaticPage } from '../../assets/assets';
import DraggableTemplate from '../../components/DraggableTemplate/DraggableTemplate';
import NavBarCollection from '../../components/NavBarCollection/NavBarCollection';
import { DragDropProvider } from '@dnd-kit/react';
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';
import TargetValueChange from '../../components/TargetValueChange/TargetValueChange';

function DesignPage() {
    const [Page, setPage] = useState()
    const [ReactTemplate, setReactTemplate] = useState({})
    const [NavBar, setNavBar] = useState(false)
    const [Target, setTarget] = useState(null)
    const { PageId } = useParams()


    function renderTemplate(html, values) {
        let output = html;

        for (let key in values) {
            const regex = new RegExp(`{{${key}}}`, "g");
            output = output.replace(regex, values[key].value);
        }

        return output;
    }

    const handleSavepage = async (e) => {
        console.log("Page");
        console.log(Page);
        console.log("End Page");
        try {
            const response = await axios.patch(`${PAGEAPI}/${PageId}`, { sections: Page?.sections })
            console.log(response.data);
            console.log('Updated');
            alert('Updated')

        } catch (error) {
            console.log(error.response?.data || error.message);
            alert(error.message)
        }
    }

    useEffect(() => {
        Promise.all([
            axios.get(REACTTEPLATEAPI),
            axios.get(`${PAGEAPI}/${PageId}`)
        ])
            .then(([res1, res2]) => {
                console.log('PROMISE RESPONSE');
                console.log(res2.data.data);
                console.log(res1.data);
                console.log('END PROMISE RESPONSE');

                setReactTemplate(res1.data);
                setPage(res2.data.data);
            })
            .catch(err => {
                console.log("Error:", err.message);
            });
    }, []);

    const deleteSectionTemplate = (deleteindex) => {
        setPage((prev) => ({
            ...prev,
            sections: prev.sections.filter((_, index) => index !== deleteindex),
        }));
    }


    return (
        <div style={{ width: '100%' }}>
            <Navbar />
            <DragDropProvider onDragEnd={(event) => {
                console.log(event);
                if (event.canceled) return;
                const { target, source } = event.operation;

                console.log("ID:", source.id);
                console.log("DATA:", source.data);

                // const exactcode = renderTemplate(source.data.template, source.data.values)
                setPage(prev => {
                    console.log(prev);
                    if (!prev?.sections) return { ...prev, sections: [source.data] }
                    return { ...prev, sections: [...prev.sections, source.data] }
                })
                // setPage(prev => {
                //     console.log('prev object');
                //     console.log([...prev, exactcode]);

                //     return [...prev, exactcode]
                // })
                // console.log(source.element.clientHeight);
                mainRef.current.scrollTop = mainRef.current.scrollHeight + source.element.clientHeight;
            }}>
                <div className='DesignPage'>
                    <div className="leftBar">
                        <p>Sections</p>
                        <div className="sections mt-1">
                            <div className="sectiondiv" onClick={() => {
                                setNavBar(true)
                            }}>
                                <i class="fa-regular fa-paper-plane"></i>
                                <p>NavBar</p>
                            </div>
                            <div className="sectiondiv" onClick={() => {
                                handleSavepage()
                            }}>
                                <i class="fa-regular fa-paper-plane"></i>
                                <p>Footer</p>
                            </div>
                        </div>
                        <p className='mt-1'>Components</p>
                        <div className="template">
                            {
                                // ReactAllTemplate.map(elem => <DraggableTemplate TemplateObject={elem} />)
                                ReactTemplate?.data?.map(elem => <div className="">
                                    <hr className='mt-1' />
                                    <div className="templatename">Name : {elem.name}</div>
                                    <hr className='mb-1' />
                                    <DraggableTemplate TemplateObject={elem} />
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="center">
                        {
                            Page?.sections?.map((elem, i) => {
                                console.log(elem);
                                console.log('elem');
                                return <div key={i} className={Target?.index == i ? "ActiveReactTemplate" : "ReactTemplate"} onClick={() => {
                                    if (Target?.index == i) setTarget(null)
                                    else setTarget({ ...elem, index: i })
                                }}>
                                    <DynamicRenderer key={elem._id} code={elem?.template} props={elem?.props} />
                                    <div className="templateManeger">
                                        {!Target && Target?.index != i && <div className="icon"><i class="fa-solid fa-angle-up" style={{ color: 'green' }}></i></div>}
                                        {!Target && Target?.index != i && <div className="icon"><i class="fa-solid fa-angle-down" style={{ color: 'orange' }}></i></div>}
                                        <div className="icon" onClick={() => {
                                            deleteSectionTemplate(i)
                                        }}><i class="fa-solid fa-trash-can" style={{ color: 'red' }}></i></div>
                                    </div>
                                </div>
                            })

                        }
                    </div>
                    {Target &&
                        <div className='rightBox slide-in-right' >
                            {Target && <TargetValueChange TargetValue={Target} setPage={setPage} />}
                        </div>
                    }
                </div>
            </DragDropProvider>

            {NavBar && <NavBarCollection setNavBar={setNavBar} />}
        </div>
    )
}

export default DesignPage