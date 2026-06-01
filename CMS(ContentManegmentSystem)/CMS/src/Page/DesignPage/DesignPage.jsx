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
import { DragDropProvider } from '@dnd-kit/react';
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';
import TargetValueChange from '../../components/TargetValueChange/TargetValueChange';

import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function DesignPage() {
    const token = localStorage.getItem("token")
    const [Page, setPage] = useState()
    const [templatePage, settemplatePage] = useState()
    const [templateLoading, settemplateLoading] = useState(false)
    const [ReactTemplate, setReactTemplate] = useState([])
    const [Target, setTarget] = useState(null)
    const { PageId } = useParams()

    const Navigate = useNavigate()
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

            const response = await axios.patch(`${PAGEAPI}/${PageId}`, { sections: Page?.sections }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            console.log('Updated');
            alert('Updated')

        } catch (error) {
            console.log(error.response?.data || error.message);
            alert(error.message)
        }
    }

    // const [page,setPage] = useState(1)
    useEffect(() => {
        Promise.all([
            axios.get(REACTTEPLATEAPI),
            axios.get(`${PAGEAPI}/${PageId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
        ])
            .then(([res1, res2]) => {
                console.log('PROMISE RESPONSE');

                console.log(res2.data.data);
                console.log(res1.data);
                settemplatePage(res1.data.page)
                console.log('END PROMISE RESPONSE');

                setReactTemplate(res1.data.data);
                setPage(res2.data.data);
            })
            .catch(err => {
                alert("Error:", err.response?.data?.message || err.message);
                console.log("Error:", err.response?.data || err.message);
            });
    }, []);

    const containerRef = useRef()

    const hanbleScrollingEnd = async () => {
        const el = containerRef.current;

        const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        // alert(!isAtBottom)
        if (templateLoading || !isAtBottom) return
        try {
            settemplateLoading(true)
            const response = await axios(`${REACTTEPLATEAPI}?page=${templatePage + 1}`)
            console.log(response.data);
            setReactTemplate(prev=>[...prev,...response.data.data]);
            if(templatePage+1==response.data.page) return 
            settemplatePage(response.data.page)
            settemplateLoading(false)

        } catch (error) {
            alert(error.message)
        }
    }

    const deleteSectionTemplate = (deleteindex) => {
        setPage((prev) => ({
            ...prev,
            sections: prev.sections.filter((_, index) => index !== deleteindex),
        }));
    }

    const moveUp = (index) => {

        if (index === 0) return;

        const updated = [...Page?.sections];

        [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];

        setPage(prev => {
            return { ...prev, sections: updated }
        });
    };

    const moveDown = (index) => {

        const updated = [...Page?.sections];

        if (index + 1 === updated.length) return;


        [updated[index + 1], updated[index]] =
            [updated[index], updated[index + 1]];

        setPage(prev => {
            return { ...prev, sections: updated }
        });
    };

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
                    <div className="leftBar" ref={containerRef} onScroll={hanbleScrollingEnd}>
                        <div className="flex gap-2">
                            <button className="w-full py-2 rounded-[5px] bg-[#f5f5f5]">Prev</button>
                            <button onClick={() => {
                                handleSavepage()
                            }} className="w-full py-2 rounded-[5px] bg-black text-white">Save</button>
                        </div>
                        <p>Sections</p>
                        <div className="sections mt-1">
                            <div className="sectiondiv" onClick={() => {
                                Navigate('/navbars')
                            }}>
                                <i class="fa-solid fa-arrow-pointer"></i>
                                <p>NavBar</p>
                            </div>
                            <div className="sectiondiv" onClick={() => {
                                alert('footer soon...')
                            }}>
                                <i class="fa-solid fa-shoe-prints"></i>
                                <p>Footer</p>
                            </div>
                            <div className="sectiondiv" onClick={() => {
                                Navigate('/auth')
                            }}>
                                <i class="fa-solid fa-unlock-keyhole"></i>
                                <p>Authetication</p>
                            </div>

                        </div>
                        <p className='mt-1'>Components</p>
                        <div className="template" >
                            {
                                // ReactAllTemplate.map(elem => <DraggableTemplate TemplateObject={elem} />)
                                ReactTemplate?.map(elem => <div className="">
                                    <hr className='mt-1' />
                                    <div className="templatename">Name : {elem._id}</div>
                                    <hr className='mb-1' />
                                    <DraggableTemplate TemplateObject={elem} />
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="center">
                        {
                            Page?.sections?.map((elem, i) => {
                                return <div key={i} className={Target?.index == i ? "ActiveReactTemplate" : "ReactTemplate"} onClick={() => {
                                    if (Target?.index == i) setTarget(null)
                                    else setTarget({ ...elem, index: i })

                                    console.log(elem);
                                    console.log('elem');
                                }}>
                                    <DynamicRenderer key={elem._id} code={elem?.template} props={elem?.props} />
                                    <div className="templateManeger">
                                        {!Target && Target?.index != i && <div className="icon"><i class="fa-solid fa-angle-up" style={{ color: 'green' }}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                moveUp(i)
                                            }}></i></div>}
                                        {!Target && Target?.index != i && <div className="icon" onClick={(e) => {
                                            e.stopPropagation()
                                            moveDown(i)
                                        }}><i class="fa-solid fa-angle-down" style={{ color: 'orange' }}></i></div>}
                                        <div className="icon" onClick={() => {
                                            deleteSectionTemplate(i)
                                            setTarget(null)
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

        </div>
    )
}

export default DesignPage