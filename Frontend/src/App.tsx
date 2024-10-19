
// import { useEffect } from "react";
// import {router} from "./routes"
// import { RouterProvider } from "react-router-dom";

// //types
// import { useAppDispatch, useAppSelector } from "./app/hook";

// import { getCurrentUser, loadAccessToken } from "./feauters/authSlice";
// import { GetJobs } from "./feauters/JobsSlice";

// function App() {
 
//   const dispatch = useAppDispatch();
  
//   //get user state from auth reducer
//   const {user} = useAppSelector((state)=> state.auth);

//   useEffect(()=>{
//     dispatch(GetJobs())
//     dispatch(getCurrentUser());
//     if(user===null) dispatch(loadAccessToken());
//   },[]);

//   return (
//     <>
//     <RouterProvider router={router} />
//      </>
//   )
// }

// export default App



// App.tsx

import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { getCurrentUser } from "./feauters/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const isLoggedInLocal = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedInLocal && !isLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

  return <RouterProvider router={router} />;
}

export default App;