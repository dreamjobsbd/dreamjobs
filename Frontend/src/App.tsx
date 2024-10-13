
import { useEffect } from "react";
import {router} from "./routes"
import { RouterProvider } from "react-router-dom";

//types
import { useAppDispatch, useAppSelector } from "./app/hook";

import { getCurrentUser, loadAccessToken } from "./feauters/authSlice";
import { GetJobs } from "./feauters/JobsSlice";

function App() {
 
  const dispatch = useAppDispatch();
  
  //get user state from auth reducer
  const {user} = useAppSelector((state)=> state.auth);

  useEffect(()=>{
    dispatch(GetJobs())
    dispatch(getCurrentUser());
    if(user===null) dispatch(loadAccessToken());
  },[]);

  return (
    <>
    <RouterProvider router={router} />
     </>
  )
}

export default App
