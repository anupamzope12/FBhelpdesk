import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () =>{
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
          email: '',
          password: ''
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await fetch('http://localhost:3000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data.message);
            if (response.ok) {
              redirectToAccount();
            } else {

            }
          } catch (error) {
            console.log(error);
          }
        };
      
        const redirectToAccount = () => {
          navigate('/fb');
        };
      
        const redirectToRegister = () => {
          navigate('/');
        };
      
    return(
        <div className="container">
        <div id="main-box">
          <div>
            <div id="log1">
              <h5 id="log11" >Log in to your account</h5>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <p id="text">Email</p>
                <input
                  id="inputbox"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p id="text" >Password</p>
                <input
                  id="inputbox"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <p><input type="checkbox" /> Remember Me</p>
            </form>
          </div>
          <div>
            <button type="submit" id="login1" onClick={redirectToAccount}>Login</button>
          </div>
        
          <div id='ptag'>
                <p>New to MyApp ? <span><button type='submit' id="sign" onClick={redirectToRegister}>Sign Up</button></span></p>
          </div>
        </div>
      </div>
  
    )

}

export default Login;