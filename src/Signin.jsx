import { useState } from "react";
import "./Signin.css";
import avatar from "./assets/avatar.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-left">
          <img src={avatar} alt="avatar" className="signin-avatar" />
        </div>
        <div className="signin-right">
          <h2 className="signin-title">Welcome Back</h2>
          <p className="signin-subtitle">Sign in to continue your progress</p>
          <form className="signin-form" onSubmit={handleSubmit}>
            <p>Email</p>
            <input 
              type="text" 
              onChange={(e) => setEmail(e.target.value)} 
              className="signin-input" 
              value={email} 
              required 
            />
            <p>Password</p>
            <input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              className="signin-input" 
              value={password} 
              required 
            />
            <div className="signin-options">
              <label>
                <input 
                  type="checkbox" 
                  checked={rememberMe} 
                  onChange={(e) => setRememberMe(e.target.checked)} 
                />
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <div className="signin-or-login">
            <p>OR LOGIN WITH</p>
            <div className="signin-social-icons">
              <i className="fab fa-facebook social-icon" style={{ color: '#3b5998' }}></i>
              <i className="fab fa-google social-icon" style={{ color: '#db4437' }}></i>
              <i className="fab fa-twitter social-icon" style={{ color: '#1DA1F2' }}></i>
              <i className="fab fa-instagram social-icon" style={{ color: '#C13584' }}></i>
            </div>
          </div>
          <div className="signin-acc">
            Don't have an account? <Link className="signin-log" to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
