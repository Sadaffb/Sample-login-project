import React , {Component, useState} from 'react';
import "./style.css";
import {BrowserRouter, Route, Routes ,Link, useNavigate } from 'react-router-dom';
import { Password } from './components/password';
import { Login } from './components/login';

export const App = () => {
  
return (
  <BrowserRouter>
    < Routes >
      <Route  path="/"  element={<Login />} />
      <Route path = "/component/password" element ={< Password />} />
    </ Routes >
  </BrowserRouter> 
  
);
}
