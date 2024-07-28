import React , { useState} from 'react';
import "../style.css";
import { useNavigate } from 'react-router-dom';



export const Login =()=>{
    const navigate = useNavigate()
    const [phoneNumber, setPhoneNumber] = useState('');
    const goToNewPage=()=>{
      navigate('component/password' , { state : {data: phoneNumber}});
      
    }

    return(
        < div className = "main_div" >
        <div className='main_title'>ورود | ثبت نام</div>
        < div className = 'description' > لطفا شماره موبایل خود را وارد کنید</ div >
        < input id = 'phonenumber' className = "box_style_phone_number" type = "text"
        placeholder = "شماره موبایل" value ={ phoneNumber}
             onChange ={ e => setPhoneNumber(e.target.value)}/>
        < button className = "button_style_login"
        onClick ={ () => goToNewPage()}> ثبت </ button >     
     </ div >
    )
}
