
//packages
import { Link } from "react-router-dom"

const Header = () => {
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
          <Link style={{margin : "0px 5px"}} to={`/login`}>login</Link>
          </div>
    </section>
    </>
  )
}

export default Header