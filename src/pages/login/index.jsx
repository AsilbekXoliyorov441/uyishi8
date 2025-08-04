import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [phone , setPhone] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();





  const handleSubmit = async(e) => {
    e?.preventDefault()
     
    try{

      const res = await axios.post("https://testpsyedu.limsa.uz/auth/login", {
        phone: phone,
        password: password,
      });

      localStorage.setItem("token" , res?.data?.access_token);
      
      
      navigate("/statistics");

    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className="flex items-center justify-center flex-col h-[100vh]">
      <div className="max-w-[500px] w-[100%] shadow-2xl rounded-[10px] p-[20px] ">
        <h1>Login</h1>
        <form 
         onSubmit={handleSubmit}
        className="flex flex-col gap-[20px]">
          <input
            onChange={(e) => setPhone(e?.target?.value)}
            className="h-[40px] p-[5px] mt-[30px]  w-[100%] shadow"
            type="text"
            placeholder="+9989999999"
          />
          <input
            onChange={(e) => setPassword(e?.target?.value)}
            className="h-[40px] p-[5px] mt-[30px]  w-[100%] shadow"
            type="password"
            placeholder="Parolni kiriting"
          />
          <button type='submit' className="h-[40px] p-[5px] mt-[30px] bg-[blue] text-white text-[20px]  w-[100%] shadow">
            Login qilish
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage