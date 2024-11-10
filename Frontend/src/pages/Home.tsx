
//layouts
import HeroSection from "../layout/HeroSection";
import Categories from "../layout/Categories";
import LinkedinNotification from "../layout/Notifications/Linkedin";
import FacebookNotification from "../layout/Notifications/Facebook"

const Home = () => {
  return (
    <>
     <HeroSection />
     <Categories />
     <LinkedinNotification />
     <FacebookNotification />
    </>
  )
}

export default Home