import React from 'react'
import { useState } from 'react'
import { docFaseOne ,docFaseTwo , docFaseThree } from '../../file'
import { MdOutlineDocumentScanner } from "react-icons/md";


const Doc = () => {
  return (
    <div className="flex w-full flex-col h-[100vh] overflow-scroll py-8 sm:flex-row  sm:flex-wrap">
    <h1 className='text-[25px] text-center capitalize text-[#0D67B1] font-bold border-b-2 py-3 sm:text-left px-3 sm:w-[100%]'>welcome to . <span>rijinstructeurmakelijkworden  </span></h1>
<div className='sm:w-[45%] px-4'>
<div className='text-[25px] items-center p-4 capitalize'>Documenten Fase 1</div>
    <div className="flex flex-col">
{docFaseOne.map((ele)=>{
    return(
        <div key={ele.id} className="flex  gap-3 w-[100%]   p-4 bg-white rounded-lg">
           <MdOutlineDocumentScanner className='text-[25px]' />
        <a href={ele.link} className='text-[20px]' target='_blank'>{ele.name}</a>
        </div>
    )
})}
    </div>
</div>
<div className='sm:w-[45%] '>
<div className='text-[25px] items-center p-4 capitalize'>Documenten Fase 2</div>
    <div className="flex flex-col">
{docFaseTwo.map((ele)=>{
    return(
        <div key={ele.id} className="flex  gap-3 w-[100%]   p-4 bg-white rounded-lg">
           <MdOutlineDocumentScanner className='text-[25px]' />
        <a href={ele.link} className='text-[20px]' target='_blank'>{ele.name}</a>
        </div>
    )
})}
    </div>
</div>
<div className='sm:w-[45%] px-4 ' >
<div className='text-[25px] items-center p-4 capitalize'>Documenten Fase 3</div>
    <div className="flex flex-col ">
{docFaseThree.map((ele)=>{
    return(
        <div key={ele.id} className="flex  gap-3 w-[100%]   p-4 bg-white rounded-lg ">
           <MdOutlineDocumentScanner className='text-[25px]' />
        <a href={ele.link} className='text-[20px]' target='_blank'>{ele.name}</a>
        </div>
    )
})}
    </div>
</div>
   </div>
  )
}

export default Doc