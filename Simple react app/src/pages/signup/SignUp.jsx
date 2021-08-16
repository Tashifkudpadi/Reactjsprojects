import React from "react";
import Button from "../../Button";
import classes from "./SignUp.module.css";

function SignUp() {
  return (
    <div className={classes.section}>
      <div className={classes.formContainer}>
        <form className={classes.signUpForm}>
          <label htmlFor="Email">E-mail</label>
          <input type="text" id="Email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
          <Button buttonSize="btn--medium" buttonColor="primary">
            SignUp
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
