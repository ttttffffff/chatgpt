import React, { useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate'

export default function ChatBody({ chat }) {
    const aiStyle = 'bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto'
    const parent=useRef(null)
    const bottomRef = useRef(null)
    useEffect(()=>{
        parent.content && autoAnimate(parent.content)},[parent])
    
        //for scrolling bottom
    useEffect(() => {
        bottomRef.current && bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    },[chat])
    return (
        <div className="flex flex-col gap-4 " ref={parent}>
            {
                chat.map((message, index) => {
                    return (
                        <div key={index} className={`boarder-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]
                        ${message.sender==='ai'&&aiStyle}`} >
                            <pre className='whitespace-pre-wrap'>
                                <span>{message.message}</span>
                            </pre>
                        </div>
                    )
                })
            }
            <div ref={bottomRef} className='h-3'></div>
        

            {/* <div className={`boarder-[#999999] break-words border-2 rounded-xl self-start px-3 py-3 max-w-[80%] ${aiStyle}`}>
                <pre className='whitespaces-pre-wrap'>
                    <span>i can help you with anything</span>
                </pre>
            </div> */}

        </div>
    )
}
