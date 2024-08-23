import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const storeContext= createContext(null);

const storeContextProvider=(props)=>{

    const url=`http://localhost:7000`;
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const[token, setToken]=useState("");
  const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const verifyCookie = async () => {
//       if (!cookies.token) {
//         navigate("/login");
//       }
//       const { data } = await axios.post(
//         `${url}/user`,
//         {},
//         { withCredentials: true }
//       );
//       const { status, user } = data;
//       console.log(data);
//       setUsername(user);
      
//       return status
//         ? toast(`Hello ${user}`, {
//             position: "top-right",
//           })
//         : (removeCookie("token"), navigate("/login"));
//     };
//     verifyCookie();
//   }, [cookies, navigate, removeCookie]);

 

  useEffect(()=>{
    
    if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
    } 

  }, [])


    const contextValue={
        userData,
        setUserData,
        setUsername,
        username,
        url,
        token,
        setToken,
    }
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}

export default storeContextProvider; //make sure it wraps main.jsx
