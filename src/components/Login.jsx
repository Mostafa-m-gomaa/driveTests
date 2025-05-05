import React from 'react'
import driveImg from '../assets/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../App'
import { LuLoader2 } from 'react-icons/lu'

const Login = () => {
    const {setLogin} = useContext(AppContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loader,setLoader] = useState(false)
    const history = useNavigate()

    const onSubmit = async(e)=>{
        setLoader(true)
        e.preventDefault()
        try{
            const res = await fetch("https://api.123theoriex.com/api/v1/auth/login" , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            })
            const data = await res.json()
            setLoader(false)
            console.log(res)
            if(data.data){
                sessionStorage.setItem("token" , data.data.token)
                history("/home")
                setLogin(true)
            }
            else if(data.status === "fail"){
alert(data.message)
            }
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
      
    }


  return (
   <div className="w-full min-h-[100vh] flex flex-col sm:flex-row sm:justify-center sm:max-h-[100vh]">
    <div className="w-full h-[140px] sm:h-full bg-[#0D67B1] sm:w-[10%]"></div>
    <form action="" className="bg-white py-8 px-3 flex flex-col gap-6 sm:w-[45%] sm:px-40 sm:py-5" onSubmit={onSubmit}>
    <h1 className='text-[25px] text-center capitalize text-[#0D67B1] font-bold border-b-2 py-3 sm:text-left px-3'>welcome to . <span>rijinstructeurmakelijkworden  </span></h1>
        <div className="text-[35px] sm:text-[25px] font-bold capitalize">Inloggen</div>
        <label  htmlFor="" className='w-full flex flex-col gap-3 text-[18px] sm:text-[15px] sm:gap-1'>
            Email
            <input type="text" required className='p-2 border-2 bg-[#E8F0FE]' onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <label htmlFor="" className='w-full flex flex-col gap-3 text-[18px]'>
        Wachtwoord
            <input required type="text " className='p-2 border-2 bg-[#E8F0FE]' onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <button className="bg-[#FACA00] w-fit p-3 text-[20px] uppercase rounded-xl font-bold mx-auto hover:bg-[#0D67B1] transition-all" type='submit' disabled={loader}>{loader ? <LuLoader2 className='animate-spin' />:"Inloggen"}</button>

    <div className="w-[80%] mx-auto">

    <div className="font-bold">Vragen? Neem contact op</div>
    <a href="mailto:info@abcrijinstructeur.nl">info@abcrijinstructeur.nl</a>
    <div className="text-">+31 85 401 1603</div>
    </div>
    </form>
    <img src={driveImg} className='sm:w-[45%] max-h-[100%]' alt="" />
   </div>
  )
}

export default Login