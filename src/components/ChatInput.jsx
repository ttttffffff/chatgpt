import React,{useState} from 'react'

export default function ChatInput({sendMessage,loading}) {
  const [value,setValue] = useState('')
  
  const handleClick = ()=>{
    if(value==='') return
    sendMessage({sender:"user",message:value})
  }
  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative'>
      {loading?<img src='./Loading.gif' alt='loading' className='w-8 m-auto'/>:<>
      
        <textarea rows={1} 
        className='border-0 bg-transparent outline-none w-11/12'
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        onKeyDown={(e)=>(e.key==='Enter'&&e.shiftKey===false)?handleClick():null}/>
        <img 
          src="./send.png" 
          alt='send-button' 
          width={20} 
          className='absolute right-3 top-4 ease-in duration-100 hover:scale-125 hover:cursor-pointer'
          onClick={handleClick}
          /></>}
          
    </div>
  )
}
