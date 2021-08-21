import React, { useState, useEffect } from "react";
import style from "./Footer.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    //to scroll up
    window.addEventListener("scroll", toggleVisibility);
    //for animation
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div data-aos="fade-up" className={style.main}>
      <div className={style.angleup}>
        {isVisible && (
          <span onClick={scrollToTop}>
            <i className="fas fa-angle-up fa-2x"></i>
          </span>
        )}
      </div>
      <div className={style.section}>
        <ul>
          <li>
            <a href="https://twitter.com/tashifkmani" target="_blank">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fab fa-xbox fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Tashifkudpadi"
              target="_blank
            "
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tashif-kudpadi-b4464b1b9/"
              target="_blank"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
      <span className={style.line}>
        <hr />
      </span>

      <div className={style.copy}>
        <p>
          © 2021 - Template developed by_
          <a href="https://www.instagram.com/itz_tshif" target="_blank">
            Tashif Kudpadi
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
