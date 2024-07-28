import React , {useState, useEffect} from 'react';
import "../style.css";
import { useLocation, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPencil } from '@fortawesome/free-solid-svg-icons';

export const Password= ()=> {
    const location = useLocation();
    const navigate = useNavigate();
    const phoneNumber = location.state;

    
    //submit data
    const handle = () => {
        alert('ثبت با موفقیت اتجام شد.')
    }

    //go back - edit phone number
    const goBack = () =>{
        navigate(-1);
    }
    
    const [counter, setCounter] = React.useState(60);

  // set timer
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  
  // reset timer
  const resetTimer = () =>{
    if (counter ==0){
        setCounter(60);
    }
  }

    return(
        <div className="main_div">
        <div className='main_title'> ورود | ثبت نام</div>
        <div className='phone_div'>
        <div className='show_phone_number'>{phoneNumber.data}</div>
            < button className = "icon_button"
            onClick ={ () => goBack()}>
                <FontAwesomeIcon icon={faPencil} />
                </ button >
            <div className='description_phone'>ویرایش شماره موبایل</div>
        </div>
        <div className='description'>لطفا رمز ارسال شده را وارد کنید</div>
        <input id='password' className="box_style_password" type="text" placeholder=""/>
        < button className = "button_style_login"
        onClick ={ () => handle()}> ثبت </ button >
        <div className='timer_div'>
            <div>{counter}</div>
            < button className = "icon_button"
            onClick ={ () => resetTimer()}>
                <FontAwesomeIcon icon={faClock} />
                </ button >
        </div> 
        
    </div>
    );
}

