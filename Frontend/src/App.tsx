
import { useEffect } from "react";
import {router} from "./routes"
import { RouterProvider } from "react-router-dom";

//types
import { useAppDispatch, useAppSelector } from "./app/hook";

import { getCurrentUser, loadAccessToken } from "./feauters/authSlice";

function App() {
 
  const dispatch = useAppDispatch();
  
  //get user state from auth reducer
  const {user} = useAppSelector((state)=> state.auth);

  useEffect(()=>{
    if(user===null) dispatch(loadAccessToken());
    dispatch(getCurrentUser());
  },[]);

  return (
    <>
    <RouterProvider router={router} />
     </>
  )
}

export default App
