import React, {useState} from 'react';
import axios from 'axios';
import "../../styles/login.scss"
import { Link } from 'react-router-dom';
import {sz} from '../../assets/index'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('investor');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        username,
        password,
        userType
      });
      // Assuming your backend sends a token upon successful authentication
      const token = response.data.token;
      // Save the token in local storage or session storage for future requests
      localStorage.setItem('token', token);
      // Redirect the user to their respective dashboard based on their user type
      switch (userType) {
        case 'investor':
          window.location.href = '/investor-dashboard';
          break;
        case 'distributor':
          window.location.href = '/distributor-dashboard';
          break;
        case 'administrator':
          window.location.href = '/admin-dashboard';
          break;
        default:
          break;
      }
    } catch (error) {
      // Handle authentication error
      console.error('Authentication failed:', error);
    }
  };

  return (
     <section id='loginSection'>
       <div className="loginComponent">
      <div className='szlogo'>
        <Link > 
        <img src={sz} alt="Smart Zindagi" />
        </Link>
      </div>
      
       <form className='loginContainer' onSubmit={handleSubmit}>
      <div className='loginHeader'>
        <h4>Manage Your Account</h4>
      </div>

      <div className="inputs">
      <div>
        <label htmlFor="loginAs">Login As:</label>
        <select id="loginAs" name="loginAs" value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="investor">Investor</option>
          <option value="distributor">Distributor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input type="text" id="userName" placeholder="Enter User Name" name="userName" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter Your Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      </div>

      <p className='credentials'>
        Login credentials are case sensitive
       </p>
      <button type='submit' id='login'>Login</button>
      </form>
        
        {/* loin footer like forgot  */}
         <div className='underline'>
          <Link to=" ">Forgot Password?</Link>
         </div>

         <div className='underline'>
          <Link to=" ">Don't have an Account? Create new</Link>
         </div>
    </div>
     </section>
  );
};

export default Login;










// const Login = () => {
//   return (
//     <>
//     <form className='loginContainer'> 
//       <div className='loginHeader'>
//         <h4>Manage Your Account</h4>
//       </div>
      
//       <div className="inputs">
//       <div >
//         <label htmlFor="loginAs">Login as:</label>
//         <select id="loginAs" name="loginAs">
//         <option value="investor">Investor</option>
//           <option value="distributor">Distributor</option>
//           <option value="administrator">Administrator</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="userName">User Name:</label>
//         <input type="text" id="userName" placeholder="Enter User Name" name="userName" />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" placeholder="Enter Your Password" name="password" />
//       </div>
//       </div>
//      <p className='credentials'>Login credentials are case sensitive
// </p>
//       <button type='submit' id="login">Login</button>

//      <div>
//      {/* <label htmlFor="forgot_password">Forgot Password</label> */}
//      {/* <input type="email" id="forgot_password" placeholder="Enter your Email" name="email" />
//      <br /> <br /> */}
//      {/* <button type='submit'>Submit</button> */}
//      </div>
//     </form>
//      <div>

//      </div>
//     </>
//   );
// };

// export default Login;
