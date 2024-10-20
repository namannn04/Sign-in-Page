import "./Signin.css";
import avatar from "./assets/avatar.png";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-left">
          <img src={avatar} alt="avatar" className="signin-avatar" />
        </div>

        <div className="signin-right">
          <h2 className="signin-title">Welcome Back</h2>
          <p className="signin-subtitle">Sign in to continue your progress</p>
          <form className="signin-form">
            <p>Email / Username</p>
            <input type="text" className="signin-input" />
            <p>Password</p>
            <input type="password" className="signin-input" />
            <div className="signin-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">
                Forget password?
              </a>
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <p className="signin-login">OR LOGIN WITH</p>
          <div className="social-login">
            <a className="social-btn instagram" href="#">
              <i className="fab fa-instagram social-icon"></i>
            </a>
            <a className="social-btn facebook" href="#">
              <i className="fab fa-facebook-f social-icon"></i>
            </a>
            <a className="social-btn google" href="#">
              <i className="fab fa-google social-icon"></i>
            </a>
            <a className="social-btn twitter" href="#">
              <i className="fab fa-twitter social-icon"></i>
            </a>
          </div>
          <div className="signin-acc">
            Don't have an account? <a className="signin-reg" href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
