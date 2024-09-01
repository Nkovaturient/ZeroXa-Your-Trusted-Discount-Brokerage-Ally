import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { storeContext } from "../../Context/ContextAPI";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../firebase";

const Login = () => {
    
    const {url, setToken,setUserData, setUsername, username}=useContext(storeContext);
    // const url=`http://localhost:7000`

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
    });
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    };

    const handleFirebaseLogin=async(e)=>{
      e.preventDefault();

      const userEmail=inputValue.email;
      const userPassword=inputValue.password;

      await signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          setUserData(user);
          const{email, accessToken, metadata, photoURL, providerId, displayName}=user;
          localStorage.setItem("token", accessToken)
           setToken(accessToken);
          //  setUsername(email);
           
           setInputValue({ ...inputValue, email:"", password:""})
          toast.success(`Welcome back-${providerId}!`, {
            position: "top-left",
            theme: "colored"
          });
          navigate("/");
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          toast.error(errorMessage, {
            position: "top-left",
            autoClose: 5000,
            theme: "dark",
          });
      });
    }
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(`${url}/user/login`,
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        // console.log(data);
        const { status, message, token, userData } = data;
        if (status) {
          
        localStorage.setItem("token", token)
        setToken(token);
        toast.success(message, {
          position: "top-left",
          autoClose: 5000,
          theme: "dark",
        });
        navigate("/");
        } else {
          toast.error(message, {
            position: "top-left",
            theme:"dark"
          })
        }
      } catch (error) {
        console.log(error.message);
      }
      setInputValue({
        ...inputValue,
        email: "",
        password: "",
      });
    };

  
    return (
        <div className="signup-page">
      <div className="form_container">
        <h2>Login Account</h2>
        <form onSubmit={handleFirebaseLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Already have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
      </div>
      </div>
    );
  };
  
  export default Login;