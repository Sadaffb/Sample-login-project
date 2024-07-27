import React from 'react';
import "../style.css";
import { useLocation, useNavigate} from 'react-router-dom';

export const Password= ()=> {
    const location = useLocation();
    const navigate = useNavigate();
    const phoneNumber = location.state;
    const handle = () => {
        alert('ثبت با موفقیت اتجام شد.')
    }
    const goBack = () =>{
        navigate(-1);
    }

    return(
        <div className="main_div">
        <div className='main_title'> ورود | ثبت نام</div>
        <div className='phone_div'>
            <div className='show_phone_number'>{phoneNumber.data}</div>
            < button className = "go_back_button"
            onClick ={ () => goBack()}></ button >
        </div>
        <div className='description'>لطفا رمز ارسال شده را وارد کنید</div>
        <input id='password' className="box_style_password" type="text" placeholder=""/>
        < button className = "button_style_login"
        onClick ={ () => handle()}> ثبت </ button > 
    </div>
    );
}

