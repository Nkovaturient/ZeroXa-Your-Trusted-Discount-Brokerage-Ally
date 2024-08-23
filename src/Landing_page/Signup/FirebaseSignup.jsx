import React, { useContext, useState } from 'react'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from "../../firebase";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { storeContext } from '../../Context/ContextAPI';

const FirebaseSignup = () => {

  const {setUserData, url, setToken, setUsername}=useContext(storeContext);
    const[inp, setInp]=useState({
        email: "",
        username: "",
        password: "",
    });

    const handleOnChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value
        // console.log(inp, name, "--", value);
        setInp({ ...inp, [name]: value })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const userEmail=inp.email;
        const userPassword=inp.password;

        await createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(userCredential);
            setUserData(user);
            const{email, accessToken, providerId, photoURL, displayName, metadata}=user;
          localStorage.setItem("token", accessToken)
           setToken(accessToken);
          //  setUsername(email);
           
            toast.success('Registered Successfully!', {
                position: "top-left",
                theme: "colored"
              });
              setInp({ ...inp, email:"", password:"", username:"" })
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

    console.log(inp);

  return (
    <div className="signup-page">
    <div className="form_container">
      <h2 className='text-center ' style={{fontWeight: 600, color: '#DD2C00'}}>Firebase Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={inp.email}
            placeholder="a good email &"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={inp.username}
            placeholder="your good name"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={inp.password}
            placeholder="with a strong password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit" style={{fontWeight: 500, backgroundColor: '#DD2C00'}}>Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
    </div>
  )
}

export default FirebaseSignup