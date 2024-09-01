import React, {useState, useEffect} from "react";
import { useContext } from "react";
import { storeContext } from "../../Context/ContextAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import { GoogleAuthProvider, linkWithPopup, getAuth, getRedirectResult, signOut  } from "firebase/auth";
const provider = new GoogleAuthProvider();

const Dashboard = () => {
  const { url, token, setToken, userData } = useContext(storeContext);
  const navigate = useNavigate();
  const { email, providerId, photoURL, displayName, metadata }=userData;
  const [image, setImage] = useState(false);
  
//   useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           const uid = user.uid;
//           // ...
//           console.log("uid", uid)
//         } else {
//           // User is signed out
//           // ...
//           console.log("user is logged out")
//         }
//       });
     
// }, [])
 
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

  useEffect(() => {
     getRedirectResult(auth).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        // Accounts successfully linked.
        const user = result.user;
        console.log("dashboard user--")
        console.log(user);
      }
    }).catch((error) => {
      toast.error(`${error.message}`, {
        position: "top-left",
        autoClose: 5000,
        theme: "dark",
      });
    });
  }, []);


  const handleLogout = async() => {               
    await signOut(auth).then(() => {
      localStorage.removeItem("token");
       setToken("");
        toast.success('Logged out successfully', {
          position: "top-left",
          theme: "colored"
        });
        navigate("/");
    }).catch((error) => {
      toast.error(`${error.message}`, {
        position: "top-left",
        autoClose: 5000,
        theme: "dark",
      });
    });
}

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
          <button onClick={handleLogout}>Logout</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
