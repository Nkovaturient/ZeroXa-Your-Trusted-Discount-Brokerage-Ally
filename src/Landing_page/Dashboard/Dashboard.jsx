import React from "react";
import { useContext } from "react";
import { storeContext } from "../../Context/ContextAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const { url, token, setToken, userData } = useContext(storeContext);
  const navigate = useNavigate();
  const { email, accessToken, providerId, photoURL, displayName, metadata } =
    userData;
  const [image, setImage] = useState(false);
  
 


  const verifyToken = async () => {
    const data = await axios.post(
      `${url}/api/auth`,
      {},
      { headers: { token } }
    );

    const result = data.data.userData;
    const userName = result.username;
    setUser(userName);
    toast.info(`Hello ${userName}!`, {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
    });
  };

  // useEffect(() => {
  //     verifyToken();
  // {
  //     email: email,
  //     accountHolder: displayName || providerId,
  //     creationTime: metadata.creationTime.slice(0, 16),
  //     photoUrl: photoURL,
  //    }
  // }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="home_page">
          <h4>
            Welcome, <span>{email}</span>
          </h4>
          <span>{displayName || providerId}</span>
          
          <div className="row">
          <div className=" add-image-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : 'upload_area.png'} alt="img" style={{height: "250px", borderRadius: "50%"}} />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])}
                        type="file" id='image' hidden required />
                        
                </div>
          </div>
          <div className="col-6">
          <button onClick={Logout}>Logout</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
