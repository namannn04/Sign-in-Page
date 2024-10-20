import { useState } from "react";
import "./Signup.css";
import avatar from "./assets/avatar.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await createUserWithEmailAndPassword(auth, email, password)
        console.log("Account Created")
    }catch(err){
        console.log(err)
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <img src={avatar} alt="avatar" className="signup-avatar" />
        </div>

        <div className="signup-right">
          <h2 className="signup-title">Create an Account</h2>
          <p className="signup-subtitle">Sign up to start your journey</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <p>Email</p>
            <input 
              type="text" 
              onChange={(e) => setEmail(e.target.value)} 
              className="signup-input" 
              value={email} 
              required 
            />
            <p>Password</p>
            <input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              className="signup-input" 
              value={password} 
              required 
            />
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <div className="signup-acc">
            Already have an account? <Link className="signup-log" to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
