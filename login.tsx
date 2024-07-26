import React from 'react';
import "./style.css";
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import { Password } from './Password';



export const Login = () => {
  
    const navigate = useNavigate()
  
    const gotToNewPage=()=>{
      navigate("/Password");
    }
  return (
    <div className="main_div">
            <div className='main_title'> ورود | ثبت نام</div>
            <div className='description'>لطفا شماره موبایل خود را وارد کنید</div>
            <input className="box_style_phone_number" type="text" placeholder="شماره موبایل"/>
            <button typeof='' className="button_style_login" 
            onClick={() => gotToNewPage()}>ثبت</button>
                <Routes>
                <Route path="/login" element={<Login />} />
                </Routes>
    </div>
  );
}

