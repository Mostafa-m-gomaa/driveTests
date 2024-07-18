import React, { useEffect } from 'react'
import { useState } from 'react'

const ExamResult = () => {
  const [ques,setQues] = useState(JSON.parse(sessionStorage.getItem("userAnswers")))
  const [grade,setGrade] = useState(0)



  useEffect(()=>{
    const total=ques.reduce((acc , ele)=>{ele.correct === ele.chosen  ?  acc +=1   : null ;
      return acc
            }  , 0)
setGrade(total)

  } ,[])
  return (
    <div className="flex w-full flex-col h-[100vh] overflow-scroll py-8 ">
   <h1 className='text-[25px] text-center capitalize text-[#0D67B1] font-bold border-b-2 py-3 sm:text-left px-3'>welcome to . <span>rijinstructeurmakelijkworden  </span></h1>
   <div className="my-8">
      <h1 className="text-[25px] text-[#0D67B1] text-center">Your Exam Result Is</h1>
      <div className="w-[80%] mx-auto text-center text-[28px]">{grade} / {ques.length}</div>
      <div>

      </div>
   </div>

   <div className="flex gap-4 flex-col w-[90%] mx-auto">
{ques.map((ele)=>{
  return(
<div className={`border-2 p-3 rounded-lg w-full flex flex-col ${ele.chosen === ele.correct ? "bg-[#00A982]": "bg-[red]" }`}>
  <div className={`text-[20px]  text-white `}>{ele.ques} ? </div>
  {ele.correct === ele.chosen ? <div className="text-white">Your answer is correct  : {ele.correct}</div>: <div className="text-white">The correct is : {ele.correct}</div>}
</div>
  )
})}
   </div>
  </div>
  )
}

export default ExamResult