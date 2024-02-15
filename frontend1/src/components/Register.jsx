import  { useState } from 'react';
import "../styles/Register.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data.message);
      navigate('/login');

    } catch (error) {
      console.log(error);
    }
  };

  const redirectToLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="container">
      <div id="main-box">
        <div>
          <div id="text11">
            <p id="text1">Create Account</p>
          </div>
          <div>
            <p id="text">Name</p>
            <input
              id="inputbox"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
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
            <p id="text">Password</p>
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
        </div>
        <div>
          <button id="signup" type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
     
        <div id="footer">
          <p>Already have an account ? <span><button type='submit' onClick={redirectToLogin}>Login</button></span></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
