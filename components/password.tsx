import React from 'react';
import "../style.css";
import { useLocation} from 'react-router-dom';

export const Password= ()=> {
    const location = useLocation();
    const phoneNumber = location.state;
    return(
        <div className="main_div">
       <div className='main_title'> ورود | ثبت نام</div>
       <div className='button_style_login'>{phoneNumber.data}</div>
       <div className='description'>لطفا رمز ارسال شده را وارد کنید</div>
       <input id='password' className="box_style_password" type="text" placeholder=""/>
            
    </div>
    );
}

