

import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import {routes} from "./routes/index"
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

  return <RouterProvider router={routes} />;
}

export default App;