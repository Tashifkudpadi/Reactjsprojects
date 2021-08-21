import React, { useEffect } from "react";
import classes from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div data-aos="fade-up" className={classes.main}>
      <div data-aos="fade" className={classes.title}>
        <h2>Projects</h2>
      </div>
      <div className={classes.container}>
        <div data-aos="fade-right" className={classes.left}>
          <h2>Project Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodhsggsh
            ipsum eos commoddhdhi quisquam edjsnum eius id aut libero qui
            maiores explicabo voluptatum eveniet harum enim sint quam
            architecto, odit consectetur repellat delectus obcaecati! Loremdvs
            ipsum dolor sit amedhhssjdyt consectetur.
          </p>
          <div className={classes.btnSection}>
            <span className={classes.span}>See Live</span>
            <span>Source Code</span>
          </div>
        </div>
        <div data-aos="fade-left" className={classes.right}>
          <img src="images/project.jpg" alt="" />
        </div>
      </div>
      <div className={classes.container} id="other">
        <div data-aos="fade-right" className={classes.left}>
          <h2>Project Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodhsggsh
            ipsum eos commoddhdhi quisquam edjsnum eius id aut libero qui
            maiores explicabo voluptatum eveniet harum enim sint quam
            architecto, odit consectetur repellat delectus obcaecati! Loremdvs
            ipsum dolor sit amedhhssjdyt consectetur.
          </p>
          <div className={classes.btnSection}>
            <span className={classes.span}>See Live</span>
            <span>Source Code</span>
          </div>
        </div>
        <div data-aos="fade-left" className={classes.right}>
          <img src="images/project.jpg" alt="" />
        </div>
      </div>
      <div className={classes.container} id="other">
        <div data-aos="fade-right" className={classes.left}>
          <h2>Project Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quodhsggsh
            ipsum eos commoddhdhi quisquam edjsnum eius id aut libero qui
            maiores explicabo voluptatum eveniet harum enim sint quam
            architecto, odit consectetur repellat delectus obcaecati! Loremdvs
            ipsum dolor sit amedhhssjdyt consectetur.
          </p>
          <div className={classes.btnSection}>
            <span className={classes.span}>See Live</span>
            <span>Source Code</span>
          </div>
        </div>
        <div data-aos="fade-left" className={classes.right}>
          <img src="images/project.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Projects;
