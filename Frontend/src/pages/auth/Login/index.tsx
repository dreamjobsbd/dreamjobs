
import { useState } from "react";

import { FormEvent } from "react";
import { useAppDispatch } from "../../../app/hook";
import { login } from "../../../feauters/authSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();


   //handle form submission
   const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }))
  
  }
  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
            <label htmlFor="">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="none"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">password: </label>
            <input
              type="email"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
    </form>
  )
}

export default Login