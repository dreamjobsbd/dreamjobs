

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/apiService";

import { Link } from "react-router-dom";

const index = () => {
    const [loading , setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const { token } = useParams();

    useEffect(()=>{
       
        const ActivateUser = async () => {
            try {
                const res = await api.post("/auth/activate",{token});
                console.log(res);
                
                if(res.status === 200) {
                  setMessage(res.data.message)
                }
              } catch (error:any) {
               console.log(error.response?.data?.message || error.message);
              }finally{
               setLoading(false);
              }
        }

        if(token){
            ActivateUser();
          }else{
            setMessage('invalid activation link');
            setLoading(false);
          }
       
    },[token])
  
  return (
    <>
    <div id="activate-email-page">
    {loading ? <h2>Loading....</h2> : 
     <div style={{textAlign:"center"}}>
    <h2 style={{margin:"0rem"}} >{message}</h2>
    <Link to={`/login`}>login</Link>
    </div>
    }

 
    </div>
    </>
  )
}

export default index