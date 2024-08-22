import React from 'react';


function Login() {
  return (
    <div className="container">
      <div className='Left-content'>
        <div className="header">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Logo" />
          </div>
          </div>
        <div className="heading">
            <img src={process.env.PUBLIC_URL + '/Heading.png'} alt="Heading" />
          </div>
        
        <div className="login-details">
          <br></br><br></br>
          <img src={process.env.PUBLIC_URL + '/Glogin.png'} alt="Button" className="button" />
          <br></br><br></br>
          <img src={process.env.PUBLIC_URL + '/seperater.png'} alt="Separator" className="separator" />
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" id="remember-me" />
                Remember me
              </label>
            </div>
            <button className="register-button">Register</button>
            <p>Already have an account? <span>Log in</span></p>
          </form>
        </div>
      </div>
      <div className='Right-content'></div>
    </div>
  );
}

export default Login;
