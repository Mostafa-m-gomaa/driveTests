import React from 'react'
import { useState } from 'react'
import { examsFaseOne , examsFaseTwo ,examsFaseThree } from '../../file'
import { Link } from 'react-router-dom'

const Exams = () => {
    const [fase,setFase] = useState('fase 1')
    const [exams, setExams] = useState(examsFaseOne)

    const changeFase =(exams, title)=>{
setExams(exams)
setFase(title)
    }
  return (
    <div className="w-full flex flex-col gap-2 sm:h-[100vh] overflow-scroll">
<div className="flex p-2 flex-col items-center w-full gap-4 text-[25px] border-b-4"><h1>Examens - {fase}</h1>
<div className="flex justify-center gap-6 w-full [&_span]:bg-[#0D67B1] [&_span]:p-2 [&_span]:rounded-xl [&_span]:text-white [&_span]:cursor-pointer sm:justify-center sm:gap-6">
    <span onClick={()=>changeFase(examsFaseOne , "fase 1 ")} >fase 1</span>
    <span onClick={()=>changeFase(examsFaseTwo , "fase 2 ")}>fase 2</span>
    <span onClick={()=>changeFase(examsFaseThree , "fase 3 ")}>fase 3</span>
   </div>
</div>
<div className="flex flex-col gap-6">
    {exams.map((ele)=>{
        return(
            <Link to={'/ques'} onClick={()=>sessionStorage.setItem( "exam",JSON.stringify(ele))} key={ele.id} className=" sm:w-[90%] w-[80%]   p-4 bg-white rounded-lg border-2 mx-auto capitalize transition-all hover:bg-[#FADD15] ">  {ele.name}</Link>
        )
    })}

</div>
    </div> 
  )
}

export default Exams