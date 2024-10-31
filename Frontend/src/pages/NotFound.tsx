
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h2 className="text-[2.5rem] text-medium text-primary-color mb-4">404, Page Not Found</h2>
        <Link to={`/`}> <button className="bg-primary-color py-4 px-6 text-white shadow-md">Go To Home</button> </Link>
    </div>
  )
}

export default NotFound