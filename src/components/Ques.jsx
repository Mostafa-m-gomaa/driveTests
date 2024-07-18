import React, { useEffect ,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Ques = () => {
    const [correct,setCorrect] = useState([])
    const [questions,setQuestions] = useState([])
    const [userAnswers,setUserAnswers] = useState([])
    const [quesIndex,setQuesIndex] = useState(0)
    const history = useNavigate()

    const chooseAnswer =(ques , chosen , correct)=>{
        const myObj = {
            ques,
            correct ,
            chosen
        }
        setQuesIndex(quesIndex + 1)
        setUserAnswers([...userAnswers , myObj])
        sessionStorage.setItem("userAnswers" , JSON.stringify([...userAnswers , myObj]))
        console.log(quesIndex)
        console.log(questions.length)
        if(quesIndex === questions.length -1){
           history("/result")
        }
    }



    useEffect(()=>{
        const exam = JSON.parse(sessionStorage.getItem("exam"))
        setQuestions(exam.questions)
      
    } ,[])
  return (
    <div className="w-full flex flex-col gap-2 sm:h-[100vh] overflow-scroll">
           <h1 className='text-[25px] text-center capitalize text-[#0D67B1] font-bold border-b-2 py-3 sm:text-left px-3'>welcome to . <span>rijinstructeurmakelijkworden  </span></h1>
           <div className="flex flex-col w-[90%] mx-auto">
{questions.map((ele ,index)=>{
    if(index === quesIndex){
        return(
        <div className="flex flex-col gap-7">
            <div className="text-[22px] font-bold">{ele.ques} ?</div>
            <div className="flex flex-col gap-4">
                {ele.answers.map((element)=>{
                    return(
                        <div onClick={()=>chooseAnswer(ele.ques , element , ele.correct)} className="text-[18px] capitalize border-4 p-2 bg-white hover:bg-[#FADD15] transition-all cursor-pointer">{element}</div>

                    )
                })}
            </div>

        </div>
        )
    }

})}
           </div>

        </div> 
  )
}

export default Ques