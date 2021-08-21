import React, { useEffect } from "react";
import classes from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, [AOS]);

  return (
    <div className={classes.main}>
      <div data-aos="fade" className={classes.title}>
        <h2>About me</h2>
      </div>

      <div className={classes.container}>
        <div data-aos="fade" className={classes.left}>
          <img src="images/profile.jpg" alt="" />
        </div>
        <div data-aos="fade-right" className={classes.right}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            nemo? A nobis minus et nisi voluptatum, officia quam facere aliquid
            eveniet ipsum quia unde consequuntur ducimus aut recusandae
            <br />
            <br />
            <span className={classes.secSpan}>
              quisquam. Possimus dicta consequatur sint! Deleniti? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolor quam,
              doloremque id placeat ut eni consequuntur excepturi odit voluptas
              laborum. Cupiditate minima deleniti vitae, eveniet accusamus ad
              fuga voluptatem a incidunt aut?
            </span>
          </p>
          <button className={classes.btn}>Resume</button>
        </div>
      </div>
    </div>
  );
}

export default About;
