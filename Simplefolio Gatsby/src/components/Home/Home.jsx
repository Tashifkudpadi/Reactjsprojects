import React, { useEffect } from "react";
import classes from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div data-aos="fade-right" className={classes.container}>
      <div className={classes.main}>
        <h2>
          Hi, my name is <span className={classes.span}>Your Name</span>
          <br />
          I'm the Unknown Developer.
        </h2>
        <button className={classes.btn}>Know more</button>
      </div>
    </div>
  );
}

export default Home;
