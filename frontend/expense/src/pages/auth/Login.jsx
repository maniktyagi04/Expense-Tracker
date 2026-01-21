import React, { useState, useContext } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import Input from '../../components/Inputs/Input';
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!password){
      setError("Please enter your password.");
      return;
    }

    if(password.length < 8){
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError('');

    //login API call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const {token, user} = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong, Please try again.");
      }
    }

  }
  return (
    <AuthLayout>
      <div className='flex flex-col justify-center h-full px-6 md:px-12 py-10'>
        <div className="mb-8">
            <h3 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h3>
            <p className='text-base text-gray-500'>
            Please enter your details to login
            </p>
        </div>

        <form onSubmit={handleLogin} className="w-full">
          <Input 
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="lucky@example.com"
            type="text"
          />

          <Input 
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {error && <p className='text-red-500 text-sm pb-2.5 font-medium'>{error}</p>}

          <button type="submit" className='btn-primary mt-4'>
            LOGIN
          </button>

          <p className='text-sm text-center text-gray-600 mt-6'>Don't have an account?{" "}
            <Link className="font-semibold text-primary hover:underline" to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login;
