import React from 'react'
import { useState } from 'react'
import { mediaFaseOne , mediaFaseThree } from '../../file'

const Media = () => {
    const [media, setMedia] = useState(mediaFaseOne)
    const [title, setTitle] = useState('Media Phase 1')

    const mediaChange = (media, title) => {
        setMedia(media)
        setTitle(title)
    }

  return (
  <div className="flex w-full flex-col h-[100vh] overflow-scroll py-8">
   <h1 className='text-[25px] text-center capitalize text-[#0D67B1] font-bold border-b-2 py-3 sm:text-left px-3'>welcome to . <span>rijinstructeurmakelijkworden  </span></h1>
   <div className="text-[25px] flex flex-col gap-4 items-center p-4 capitalize ">
    <div>{title}</div> 
   <div className="flex justify-between w-full [&_span]:bg-[#0D67B1] [&_span]:p-2 [&_span]:rounded-xl [&_span]:text-white [&_span]:cursor-pointer sm:justify-center sm:gap-6">
    <span onClick={()=>mediaChange(mediaFaseOne , "Media Phase 1" )}>Phase 1</span>
    <span onClick={()=>mediaChange([] , "Media Phase 2" )}>Phase 2</span>
    <span onClick={()=>mediaChange(mediaFaseThree , "Media Phase 3" )}>Phase 3</span>
   </div>
   </div>
   <div className="flex w-[80%] mx-auto flex-wrap gap-8 items-center justify-center">
    {media.map((ele)=>{
        return(
            <div key={ele.id} className="flex flex-col gap-3 w-[100%] sm:w-[45%]  p-4 bg-white rounded-lg">
              
                <iframe
        className='size-[100%] sm:h-[200px]'
        src={`https://www.youtube.com/embed/${ele.link}`}
     
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
        <h1>{ele.name}</h1>
            </div>
        )
    })}
   </div>
  </div>
  )
}

export default Media