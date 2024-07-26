import React from 'react';
import "./style.css";
import {BrowserRouter, Route, Router, Routes, useNavigate ,useParams} from 'react-router-dom';
import { Password } from './Password';
import { Login } from './login';



export const App = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }
  return (
    
    <div className="main_div">
      <Router>
          <div>
            <button typeof='' className="button_style_login" onClick={routeChange}>ورود</button>
          </div>
          <Route path="/login" element={<Login />} />
      </Router>
    </div>
  );
}

