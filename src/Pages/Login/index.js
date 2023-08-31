import React,{useState, useContext} from 'react';
import NavBar from '../../Component/NavBar';
import validationSchema from '../../Util/validation/login'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AuthContext from '../../Context/AuthContext';

import './style.css';




const Login = ()=>{
  const {  login } = useContext(AuthContext);

  const navigate = useNavigate();
  function navToHome(){
    navigate('/')
  }

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState();
    // const[ setUsers] = useState([]);
    const [error, setError] = useState();
  
    const clear = () => {
      setEmail('');
      setPassword('');
      setError(null);
    };
    
  
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };


    const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        setIsLoading(true);
        const userData = {
          email,
          password,
        };
  
        await validationSchema.validate(userData, {
          abortEarly: false,
        });
        const response = await fetch('https://my-json-server.typicode.com/MennatullahAsh/UsersAPI/users',userData);
        const data = await response.json();
         console.log(data);
         login(userData)
        clear();
        setIsLoading(false);
       navToHome();
      } catch (err) {
        setError(err.response ? err.response.data.message : err.errors[0]);
        setIsLoading(false);
      }
    };
  
   
   

  return (
  <>

      <NavBar />


      <div className='bg-image'>
      <div className="login-form-container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />


           {error && (
            <Alert  severity="error" style={{marginTop:'8px'}}>
              {error}
            </Alert>
          )}


        </div>
        <button onClick={handleSubmit}>
        {isLoading ? "Successfully" : 'Login'}
          </button>
      </form>
    </div>
    </div>



              
  </>
      );

    
}


export default Login;