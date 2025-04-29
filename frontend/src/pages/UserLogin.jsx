import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [userData,setUserData] = useState({});
  
  const [user,setUser] = useContext(UserDataContext);

  const nevigate = useNavigate();

  const submitHandler = async(e)=>{
    e.preventDefault();
    
    const userData = {
      email: email,
      password: password,
    }
    console.log(userData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );
  
      // The login route returns 200 on success
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token",data.token);
        console.log("Logged in user:", data.user);
        nevigate("/home");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  
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
      <p className='text-center'>New here? <Link className="text-blue-500" to="/signup">Create new Account</Link></p>
      </div>
      <div>
        <Link 
        to="/captain-login"
        className='bg-[#10b461] flex items-center justify-center text-white font-semibold mt-4 mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base' >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin