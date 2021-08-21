import React, { useEffect } from "react";
import classes from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);

  return (
    <div data-aos="fade" className={classes.main}>
      <div data-aos="fade-down" className={classes.title}>
        <h2>Contact</h2>
      </div>
      <div data-aos="fade-right" className={classes.container}>
        <p>Would you like to work with me? Awesome!</p>
        <span className={classes.talk}>Let's Talk</span>
      </div>
    </div>
  );
}

export default Contact;
