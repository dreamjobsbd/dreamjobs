
import {useAppSelector, useAppDispatch } from "../../../app/hook";

import { logout } from "../../../feauters/authSlice";

const index = () => {

    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state) => state.auth);

    const handleLogout = () => {
      dispatch(logout());
    }
   
    
    if(user){
        return (
            <div style={{textAlign: "center"}}>
             <h2>welcome, {user?.fullName}</h2>
             <p style={{margin : "0rem"}} >email : {user?.email}</p>
             <p>number : {user?.phoneNumber}</p>
             <button onClick={handleLogout}>Logout</button>
            </div>
          ) 
    }else {
        <>
        <h2>No user is Logged in</h2>
        </>
    }


}

export default index