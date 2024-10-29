import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfileUpdate from './pages/profileUpdate/profileUpdate'; 
import Login from './pages/login/login';
import Chat from './pages/login/chat/chat';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Login/> } />
      <Route path='/Chat' element={<Chat/> } />
      <Route path='/profile' element={<ProfileUpdate/>} />
    </Routes>
    </>
  );
};

export default App;