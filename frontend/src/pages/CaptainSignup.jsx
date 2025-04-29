import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      setUserData({
        fullName:{
          firstName: firstName,
          lastName: lastName, 
        },
        email: email,
        password: password,
      });
      console.log(userData);
  
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 -6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mt-4  w-full mb-2">What's our Captain's Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee]  rounded px-4 py-2 border mbw-full w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              required
              className="bg-[#eeeeee]  rounded px-4 py-2 border mbw-full w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-base font-medium mt-4 mb-2">What's our Captain's Email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border mbw-full text-base placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-base font-medium mb-2">Enter Your Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            required
            type="password"
            placeholder="********"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white font-semibold  rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a account? {" "}
          <Link className="text-blue-500" to="/captain-login">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xs leading-tight">This site is protected by reCAPTCHA and the <span className='underline'>google policy</span> and <span className='underline'>Terms of Service apply</span></p>
      </div>
    </div>
  )
}

export default CaptainSignup