import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { storeContext } from "../../Context/ContextAPI";


const Login = () => {
    
    const {url, setToken, setUsername, username}=useContext(storeContext);
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
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(`${url}/user/login`,
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        console.log(data);
        const { status, message, token, userData } = data;
        if (status) {
          
        localStorage.setItem("token", token)
        setUsername(userData.username)
        toast.success(message, {
          position: "top-left",
        });
        navigate("/");
        } else {
          toast.error(message, {
            position: "top-left",
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

    useEffect(()=>{
      console.log('login--', username);
    },[])

  
    return (
        <div className="signup-page">
      <div className="form_container">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
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