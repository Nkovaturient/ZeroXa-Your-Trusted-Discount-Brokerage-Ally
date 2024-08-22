import React from 'react'
import { useContext } from 'react'
import { storeContext } from '../../Context/ContextAPI'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {

    const{url, token, setToken}=useContext(storeContext);
    const navigate = useNavigate();
    const [user, setUser] = useState("");

    const verifyToken=async()=>{
        const data = await axios.post(`${url}/api/auth`,{}, {headers : {token}} )
        
        const result=data.data.userData;
        const userName=result.username;
        setUser(userName);
        toast.info(`Hello ${userName}!`, {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
        }); 
    }; 

    useEffect(() => {
        verifyToken(); 
    }, []);

    const Logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    return(
        <>
        <div className="dashboard-container">
        <div className="home_page">
    <h4>Welcome, <span>{user}</span></h4>
    <button onClick={Logout}>LOGOUT</button>
  </div>
        </div>
        </>
    )
}

export default Dashboard