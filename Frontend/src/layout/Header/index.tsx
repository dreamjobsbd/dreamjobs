
//packages
import { Link } from "react-router-dom";

import { useAppSelector } from "../../app/hook";

const Header = () => {

  const {user} = useAppSelector((state)=> state.auth);

  return (
    <>
    <section id="header" style={{display:'flex',alignItems:'center',justifyContent:"space-around"}}>
         <div className="left-part">
          <Link to={`/`}><h2>FlexyWork</h2></Link>
         </div>

         <div >
          <Link style={{margin : "0px 5px"}} to={`/`}>Home</Link>
          <Link style={{margin : "0px 5px"}} to={`/post-job`}>post-job</Link>
          <Link style={{margin : "0px 5px"}} to={`/register`}>register</Link>
          <Link style={{margin : "0px 5px"}} to={user ? `/dashboard` : `/login` }>{user ? `dashboard` : `login` }</Link>
          </div>
    </section>
    </>
  )
}

export default Header