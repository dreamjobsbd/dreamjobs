
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
<Header />
<Outlet />
<Footer />
    </>
  )
}

export default Root