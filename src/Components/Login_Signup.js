// src/App.js

import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';


function Login_Signup() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
}

export default Login_Signup;
