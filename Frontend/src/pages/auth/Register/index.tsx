import { FormEvent, useState } from "react"
import { api } from "../../../services/apiService";


const Register = () => {

  const [fullName, setFullName ] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const UserRegistration = async (e : FormEvent) => {
      e.preventDefault();
      const res = await api.post("/auth/registration",{fullName,email,phoneNumber,password})
      if(res.status === 200) alert(res.data.message)
      
      
  }
  return (
    <form onSubmit={UserRegistration}>
          <div className="mb-3">
            <label htmlFor="">fullName: </label>
            <input
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              autoComplete="none"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="none"
              required
            />
          </div>



          <div className="mb-3">
            <label htmlFor="">Phone Number: </label>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              autoComplete="none"
              required
            />
          </div>


          <div className="mb-3">
            <label htmlFor="">Password: </label>
            <input
              type="email"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="none"
              required
            />
          </div>
     
     <button type="submit">Register</button>

    </form>
  )
}

export default Register