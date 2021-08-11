import { useState } from "react";
import Cookies from "./components/Cookies/Cookies";
import FeaturesContent from "./components/Features/FeaturesContent";
import FeaturesHeading from "./components/Features/FeaturesHeading";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Operations from "./components/Operations/Operations";
import Slogan from "./components/Slogan/Slogan";
import Testimonials from "./components/Testimonials/Testimonials";
import "./index.css";

function App() {
  const [cookie, setCookie] = useState(true);
  const hideCookieHandler = () => {
    setCookie(false);
  };

  return (
    <div className="sections">
      <Navbar />
      <Home />
      {cookie && <Cookies onConfirm={hideCookieHandler} />}
      <FeaturesHeading />
      <FeaturesContent />
      <Operations />
      <Testimonials />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
