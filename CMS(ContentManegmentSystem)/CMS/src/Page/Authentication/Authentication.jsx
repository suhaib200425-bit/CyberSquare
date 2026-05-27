import React from 'react'
import "./Authentication.css"
import { useState } from 'react'
import GlassLoginForm from '../../components/LoginForm/LoginForm'
function Authentication() {
    const [currentstate, setCurrentState] = useState(true)
    return (
        <div onClick={() => {
            // setCurrentState(prev => !prev)
        }}
            style={{
                padding: "0px 100px"
            }}
            className={`Authentication w-full h-screen flex  `}>
            <div className={`absolute w-full h-full  overlay ${!currentstate ? "OverlayShiftLeft" : "OverlayShiftRight"}`}></div>
            <div className="relative w-1/2 h-full flex items-center justify-start">

                <div className={`content leftBox  ${currentstate ? "leftBoxSlidRight" : "leftBoxSlidLeft"}`}>
                    <h1 className='text-20px'>WELCOME BACK</h1>
                    <p className='text-15px'>Lorem ipsum, dolor sit <br />
                        amet consectetur <br />
                        adipisicing.</p>
                </div>
                <div className={`content leftformBox ${!currentstate ? "leftBoxSlidRight" : "leftBoxSlidLeft"}`}>
                    <GlassLoginForm setCurrentState={setCurrentState} />
                </div>

            </div>
            <div className="relative w-1/2 h-full flex items-center justify-end">

                <div className={`content rightBox text-20px ${currentstate ? "rightBoxSlidRight" : "rightBoxSlidLeft"}`}>
                    <h1 className='text-end'>WELCOME BACK</h1>
                    <p className='text-15px text-end'>Lorem ipsum, dolor sit <br />
                        amet consectetur <br />
                        adipisicing.</p>
                </div>
                <div className={`content rightformBox ${!currentstate ? "rightBoxSlidRight" : "rightBoxSlidLeft"}`}>
                    <GlassLoginForm setCurrentState={setCurrentState} register />

                </div>


            </div>
        </div>
    )
}

export default Authentication