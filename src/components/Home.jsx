import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const history = useNavigate()
  useEffect(()=>{
    if(!sessionStorage.getItem("token")){
      history("/")
    }
  } ,  [])
  return (
<div className="flex flex-col w-full ">
    <h1 className='text-[25px] text-center capitalize text-[#0D67B1] font-bold border-b-2 py-3 sm:text-left px-3'>welcome to . <span>rijinstructeurmakelijkworden  </span></h1>
</div>

  )
}

export default Home