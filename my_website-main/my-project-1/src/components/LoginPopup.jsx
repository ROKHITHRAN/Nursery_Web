import React, { useContext, useState } from 'react';
import '../assets/css/LoginPopup.css';
import { UseAuthentication } from './hooks/UseAuthentication';
import { Navigate, useNavigate } from 'react-router-dom';
import Admin from './Admin';
import { AuthContext } from './context/AdminContext';
  //const LoginPopup = ({ onClose }) => {
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   console.log(authentication);
  //   const isAuth = login({ email, password });
  //   console.log(isAuth);
  //   // Add authentication logic here
  //   onClose();
  
  //};
  const LoginPopup = ({ onClose }) => {
    const { login, authentication} = UseAuthentication();
    const {setAuth} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (event) => {
      event.preventDefault();
      const isAuth = await login({ email, password });
      console.log('Authentication status:', authentication);
      if (isAuth) {
        console.log('Login successful');
        setAuth({ isAuthenticated: isAuth});
        navigate("/Admin")
      } else {
        alert("Invalid credentials");
        navigate("/");
        console.log('Login failed');
      }
      onClose();
    };
  
  // const[email,setEmail] = useState("");
  // const[password,setPassword] = useState("");
  // const {login,isAuthentiated,authentication} = UseAuthentication();
  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}required />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPopup;
