

import { FormEvent, useState } from "react";
import { api } from "../../../services/apiService";
import { Link } from "react-router-dom";
//icons
import { MdError } from "react-icons/md";


const Register = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");


  const [errorMessage, setError] = useState("");

  const UserRegistration = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/registration", { fullName, gender, email, phoneNumber, password })
      if (res.status === 200) alert(res.data.message)
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  const handleGenderChange = (e: any) => {
    setGender(e.target.value)
  }


  return (
    <div className="flex justify-center items-center h-atuo my-12">
      <form onSubmit={UserRegistration} className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Regsiter</h2>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700 font-medium mb-2">fullName: </label>
          <input
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
            autoComplete="none"
            required
          />
        </div>

        <div className="mb-3">
  <div className="font-medium text-gray-700 mb-2">Gender</div>
  <div className="flex">
    <label className="flex items-center justify-between border rounded-lg px-4 py-2 w-1/2 mr-4">
      <div className="flex items-center">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleGenderChange}
          className="mr-2"
        />
        Male
      </div>
    </label>
    <label className="flex items-center justify-between border rounded-lg px-4 py-2 w-1/2">
      <div className="flex items-center">
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleGenderChange}
          className="mr-2"
        />
        Female
      </div>
    </label>
  </div>
</div>

        <div className="mb-3">
          <label htmlFor="" className="block text-gray-700 font-medium mb-2">Email: </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
            autoComplete="none"
            required
          />
        </div>



        <div className="mb-3">
          <label htmlFor="" className="block text-gray-700 font-medium mb-2">Phone Number: </label>
          <input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
            autoComplete="none"
            required
          />
        </div>


        <div className="mb-3">
          <label htmlFor="" className="block text-gray-700 font-medium mb-2">Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
            autoComplete="none"
            required
          />
        </div>


        {errorMessage && <div className="flex items-center mb-3 text-red-500">
          <MdError className="me-1" />
          <p>{errorMessage}</p>
        </div>}

        <button className="mt-6 w-full bg-primary-color text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" type="submit">Register</button>
        <Link to={`/login`} className="block text-center text-[#2077E7] mt-2 font-medium text-md">Already have an account?</Link>
      </form>
    </div>

  )
}

export default Register