import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Captainlogin = () => {
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [captainData,setcaptainData] = useState("");
    
  
    const submitHandler = (e)=>{
      e.preventDefault();
      
      setcaptainData({
        email:email,
        password:password
      })
      console.log(captainData);
     
      setEmail("");
      setPassword("");  
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 -6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className='text-xl mt-4 mb-2'>What's Your Email</h3>
        <input required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border mbw-full text-lg placeholder:text-base'
        type="email" 
        placeholder='email@example.com'/>

        <h3 className='text-xl mb-2'>Enter Your Password</h3>
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        required 
        type="password" 
        placeholder='********'/>


        <button className='bg-[#111] text-white font-semibold  rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
        
       

      </form>
      <p className='text-center'>Join a fleet? <Link className="text-blue-500" to="/captain-signup">Register as a Captain</Link></p>
      </div>
      <div>
        <Link 
        to="/login"
        className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mt-4 mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base' >Sign in as User</Link>
      </div>
    </div>
  )
}

export default Captainlogin